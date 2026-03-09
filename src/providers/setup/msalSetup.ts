import { PublicClientApplication, type EventMessage, EventType, type AuthenticationResult } from "@azure/msal-browser";
import { msalConfig, ApiRequest, getEnvConfig } from "../configuration/msalConfig";
import { getTokenResponse } from "../query/getTokenResponse";
import { saveLocalStorageValue } from "../../hooks/aibel/useLocalStorage";
import { USER_IMAGE_LS_VALUE, USER_LS_VALUE, UserData } from "../types";
import { graphApi } from "../query/graphClient";

let msalInstance: PublicClientApplication;

/**
 * Decodes a JWT payload into JSON.
 *
 * @param token Raw JWT access token.
 * @returns Parsed payload object, or `null` when token is missing/invalid.
 */
const parseJwt = (token?: string) => {
    if (!token) return null;
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    } catch (_e) {
        console.warn(_e);
        return null;
    }
};

/**
 * Extracts user identity from token payload and stores it in local storage.
 *
 * The stored value is reset before extraction so stale user data is not kept
 * when token parsing fails or when no token is available.
 *
 * @param token Access token that may include an `employeeId` claim.
 * @returns `null` when token is missing or parsing fails.
 */
const findAndSetUserIdFromToken = (token?: string) => {
    saveLocalStorageValue(USER_LS_VALUE, undefined);
    if (!token) {
        saveLocalStorageValue(USER_LS_VALUE, undefined);
        return null;
    }
    try {
        const jwtDecoded: null | { employeeId: string; oid: string; displayName: string; preferred_username: string; samaccountname: string } = parseJwt(token);
        if (jwtDecoded?.employeeId) {
            const userValue: UserData = {
                id: jwtDecoded.oid,
                name: jwtDecoded.displayName,
                employeeId: jwtDecoded.employeeId,
                email: jwtDecoded.preferred_username,
                ofsName: jwtDecoded.samaccountname
            };
            saveLocalStorageValue(USER_LS_VALUE, userValue);
        }
    } catch (_e) {
        console.warn(_e);
        saveLocalStorageValue(USER_LS_VALUE, undefined);
        return null;
    }
};

/**
 * Returns a singleton MSAL `PublicClientApplication` instance.
 *
 * Setup flow:
 * - Validate required environment variables.
 * - Create and initialize the MSAL client once.
 * - Register login/token success callbacks to keep active account in sync.
 * - Resolve redirect responses and acquire a fresh token for active users.
 * - Persist decoded user identity from acquired access tokens.
 *
 * If required environment values are missing, the function logs errors and
 * returns `undefined` to prevent partially configured auth startup.
 *
 * @returns Initialized MSAL instance, or `undefined` when required config is missing.
 */
export async function getMsalInstance() {
    if (msalInstance) {
        return msalInstance;
    }

    let missing_expected_env = false;
    const config = getEnvConfig();

    if (!config.API_CLIENT_ID) {
        console.error("missing configuration for VITE_API_CLIENT_ID");
        missing_expected_env = true;
    }
    if (!config.CLIENT_ID || config.CLIENT_ID === "xyz") {
        console.error("missing configuration for VITE_CLIENT_ID");
        missing_expected_env = true;
    }
    if (!config.TENANT_ID || config.TENANT_ID === "xyz") {
        console.error("missing configuration for VITE_TENANT_ID");
        missing_expected_env = true;
    }

    if (missing_expected_env) {
        saveLocalStorageValue(USER_IMAGE_LS_VALUE, undefined);
        return;
    }

    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance?.initialize();

    msalInstance.addEventCallback((event: EventMessage) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
            const payload = event.payload as AuthenticationResult;
            const account = payload.account;

            msalInstance.setActiveAccount(account);
            graphApi.getPhoto().then((photo) => {
                saveLocalStorageValue(USER_IMAGE_LS_VALUE, photo);
            });
        }

        // so we set correct account when switching..
        if (event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS && event.payload) {
            const payload = event.payload as AuthenticationResult;
            const account = payload.account;

            msalInstance.setActiveAccount(account);
            graphApi.getPhoto().then((photo) => {
                saveLocalStorageValue(USER_IMAGE_LS_VALUE, photo);
            });
        }
    });

    msalInstance.handleRedirectPromise().then(async (response) => {
        if (!(await response)) {
            const account = msalInstance.getActiveAccount();
            if (account) {
                try {
                    const response = await getTokenResponse(
                        msalInstance,
                        {
                            ...ApiRequest,
                            ...account,
                            forceRefresh: true
                        },
                        ApiRequest
                    );
                    findAndSetUserIdFromToken(response?.accessToken);
                    return response;
                } catch (e) {
                    console.log("handleRedirectPromise() :: error", e);
                    saveLocalStorageValue(USER_IMAGE_LS_VALUE, undefined);
                    const instance = await getMsalInstance();
                    instance?.logoutRedirect({ account });
                }
            } else {
                await msalInstance.loginRedirect(ApiRequest);
            }
        } else {
            findAndSetUserIdFromToken(response?.accessToken);
        }
    });

    const account = msalInstance.getActiveAccount();

    if (account) {
        msalInstance.setActiveAccount(account);
    }

    return msalInstance;
}
