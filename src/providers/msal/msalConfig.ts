import type { Configuration, RedirectRequest } from "@azure/msal-browser";
import { readLocalStorageValue } from "../../hooks/useLocalStorage";
import { CONFIG_LS_VALUE, MsalConfiguration } from "../types";

/**
 * Reads authentication/environment configuration from local storage.
 *
 * @returns Persisted MSAL-related config values.
 */
export const getEnvConfig = (): MsalConfiguration => {
  return readLocalStorageValue<MsalConfiguration>(CONFIG_LS_VALUE);
};

/**
 * Base MSAL client configuration used when constructing
 * `PublicClientApplication`.
 *
 * Notes:
 * - `clientId` and `authority` are derived from persisted env config.
 * - Redirect URIs are rooted at `/` for login and logout callbacks.
 */
export const msalConfig: Configuration = {
  auth: {
    clientId: getEnvConfig().CLIENT_ID ?? "",
    authority: `https://login.microsoftonline.com/${getEnvConfig().TENANT_ID}`,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  cache: {
    // depends if you need to share between tabs,
    // if you have iframe and need to open new window, then you want local storage
    //cacheLocation: BrowserCacheLocation.LocalStorage // BrowserCacheLocation.SessionStorage // "sessionStorage"
  },
};

/**
 * Default redirect token request used for API access.
 *
 * Scope format: `api://<API_CLIENT_ID>/access_as_user`.
 */
export const ApiRequest: RedirectRequest = {
  scopes: [`api://${getEnvConfig().API_CLIENT_ID}/access_as_user`],
};
