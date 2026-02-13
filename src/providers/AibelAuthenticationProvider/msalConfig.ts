import type { Configuration, RedirectRequest } from "@azure/msal-browser";
import { readLocalStorageValue } from "./useLocalStorage";
import { CONFIG_LS_VALUE } from "./msalSetup";

export interface MsalConfiguration {
  CLIENT_ID?: string;
  TENANT_ID?: string;
  API_CLIENT_ID?: string;
  APP_INSIGHT?: string;
  OCP_APIM_SUBSCRIPTION_KEY?: string;
}

export const getEnvConfig = (): MsalConfiguration => {
  return readLocalStorageValue<MsalConfiguration>(CONFIG_LS_VALUE);
};

// Config object to be passed to Msal on creation
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

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const ApiRequest: RedirectRequest = {
  scopes: [`api://${getEnvConfig().API_CLIENT_ID}/access_as_user`],
};
