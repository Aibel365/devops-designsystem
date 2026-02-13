import {
  PublicClientApplication,
  type EventMessage,
  EventType,
  type AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig, ApiRequest, getEnvConfig } from "./msalConfig";
import { getTokenResponse } from "./getTokenResponse";
import { saveLocalStorageValue } from "./useLocalStorage";

export const USER_LS_VALUE: string = "USER_LS_VALUE";
export const CONFIG_LS_VALUE: string = "CONFIG_LS_VALUE";

let msalInstance: PublicClientApplication;

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
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (_e) {
    console.warn(_e);
    return null;
  }
};

const findAndSetUserIdFromToken = (token?: string) => {
  saveLocalStorageValue(USER_LS_VALUE, undefined);
  if (!token) {
    saveLocalStorageValue(USER_LS_VALUE, undefined);
    return null;
  }
  try {
    const jwtDecoded: null | { employeeId: string } = parseJwt(token);
    if (jwtDecoded?.employeeId) {
      saveLocalStorageValue(USER_LS_VALUE, jwtDecoded ?? undefined);
    }
  } catch (_e) {
    console.warn(_e);
    saveLocalStorageValue(USER_LS_VALUE, undefined);
    return null;
  }
};

export async function getMsalInstance() {
  if (msalInstance) {
    return msalInstance;
  }

  // check if we are missing expected env, so dev see it faster...

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
    return;
  }

  msalInstance = new PublicClientApplication(msalConfig);
  await msalInstance?.initialize();

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;

      msalInstance.setActiveAccount(account);
    }

    // so we set correct account when switching..
    if (event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;

      msalInstance.setActiveAccount(account);
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
              forceRefresh: true,
            },
            ApiRequest,
          );
          findAndSetUserIdFromToken(response?.accessToken);
          return response;
        } catch (e) {
          console.log("handleRedirectPromise() :: error", e);
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
