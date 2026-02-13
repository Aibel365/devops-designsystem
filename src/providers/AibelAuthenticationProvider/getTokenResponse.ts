import {
  PublicClientApplication,
  type RedirectRequest,
  type SilentRequest,
} from "@azure/msal-browser";
import { AuthError, type AuthenticationResult } from "@azure/msal-common";

export async function getTokenResponse(
  msalInstance: PublicClientApplication,
  acquireTokenSilent: SilentRequest,
  acquireTokenRedirect?: RedirectRequest,
) {
  return await msalInstance
    .acquireTokenSilent(acquireTokenSilent)
    .then(function (accessTokenResponse: AuthenticationResult) {
      // Acquire token silent success
      return accessTokenResponse;
    })
    .catch((err: AuthError) => {
      if (
        err.errorCode === "invalid_grant" ||
        err.errorCode === "interaction_required"
      ) {
        // needed if not requesting default like "ChatMessage.Send,Chat.ReadWrite"
        // atm the permissions above requires somehow additional admin concent even though the permissions should need it...

        msalInstance.acquireTokenRedirect(
          acquireTokenRedirect || acquireTokenSilent,
        );
        return;
      }

      if (err.errorCode === "no_tokens_found") {
        // this will most likely happen to a new app service
        msalInstance.loginRedirect();
        return;
      }
      if (err.errorCode === "no_network_connectivity") {
        // no network, make sure user get "no internet" page in browser
        msalInstance.loginRedirect();
      }
      // maybe we should just go to login redirect/acquireTokenRedirect here?
      // but dont want to put us in a enless loop back and forth with ms login
      throw err;
    });
}
