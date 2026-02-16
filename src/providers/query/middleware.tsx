import type { RedirectRequest } from "@azure/msal-browser";
import axios, { isAxiosError, type InternalAxiosRequestConfig } from "axios";
import { getMsalInstance } from "../setup/msalSetup";
import { getTokenResponse } from "./getTokenResponse";
import { getEnvConfig } from "../configuration/msalConfig";

/* eslint-disable */
export function communicationFailedMiddleware(error: any) {
    if ((axios.isAxiosError(error) && error.code === "ERR_NETWORK") || error.code === "ERR_CANCELED") {
        console.log("communicationFailedMiddleware", error);
        // const openDialog = dialogStore.getState().openDialog;
        // openDialog({
        //     title: i18next.t("global:noConnectionDialog.title"),
        //     description: i18next.t("global:noConnectionDialog.description"),
        //     content: <Text textAlign={"center"}>{i18next.t("global:noConnectionDialog.content")}</Text>
        // });
    }
}
/* eslint-enable */

/* eslint-disable */
export const errorInDataMiddleware = (error: unknown | { response: { status: number } }) => {
    const notValidHttpStatus = [404, 422];

    if (isAxiosError(error) && error.response?.status && notValidHttpStatus.includes(error.response?.status || 999)) {
        console.log("errorInDataMiddleware", error);
        // const openDialog = dialogStore.getState().openDialog;
        // const texts = textForStatus[error.response.status];
        // openDialog({
        //     title: texts.title as string,
        //     description: "",
        //     content: <Text textAlign={"center"}>{texts.content}</Text>
        // });
    }
};
/* eslint-enable */

// import { Text } from "@aibel365/devops-component-library-web";

// import { dialogStore } from "store";
// import i18next from "locales/i18n";

/* eslint-disable */
export function missingAuthMiddleware(error: any) {
    const httpStatus = { forbidden: 403, unauthorized: 401 };

    if (isAxiosError(error) && (error.response?.status === httpStatus.forbidden || error.response?.status === httpStatus.unauthorized)) {
        console.log("missingAuthMiddleware", error);
        // const openDialog = dialogStore.getState().openDialog;
        // openDialog({
        //     title: i18next.t("global:forbiddenDialog.title"),
        //     description: i18next.t("global:forbiddenDialog.description"),
        //     content: <Text textAlign={"center"}>{i18next.t("global:forbiddenDialog.content")}</Text>
        // });
    }
}
/* eslint-enable */

/**
 * This middleware checks if there's an access token available in local storage,
 * and appends it to the request headers if available.
 *
 * @param config
 * @param request
 * @param apiVersion
 */
/* eslint-disable */
export async function injectBearerTokenMiddleware(config: InternalAxiosRequestConfig, request: RedirectRequest, apiVersion: string) {
    const msalInstance = await getMsalInstance();

    if (!msalInstance) return config;

    const account = msalInstance.getActiveAccount();
    if (!account) return config;

    const response = await getTokenResponse(msalInstance, { ...request, account });

    if (response == null) return config;

    if (response?.accessToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${response.accessToken}`;
        config.headers["Api-version"] = apiVersion;
        config.headers["Ocp-Apim-Subscription-Key"] = getEnvConfig()?.OCP_APIM_SUBSCRIPTION_KEY;
    }

    return config;
}
/* eslint-enable */
