import { PublicClientApplication, type RedirectRequest, type SilentRequest } from "@azure/msal-browser";
import { AuthError, type AuthenticationResult } from "@azure/msal-common";

/**
 * Resolves an access token using MSAL silent acquisition with redirect fallbacks.
 *
 * Strategy:
 * - Attempt `acquireTokenSilent` first.
 * - If interaction is required (`invalid_grant` / `interaction_required`),
 *   redirect using `acquireTokenRedirect`.
 * - If there are no tokens (`no_tokens_found`) or no network
 *   (`no_network_connectivity`), redirect to login.
 * - Re-throw all other authentication errors.
 *
 * @param msalInstance Configured MSAL public client application.
 * @param acquireTokenSilent Silent token request for cached/refresh flow.
 * @param acquireTokenRedirect Optional explicit redirect request. If omitted,
 * the silent request is reused when redirect is required.
 * @returns Authentication result when token is acquired silently, otherwise
 * `undefined` when redirect/login flow is initiated.
 * @throws AuthError for all non-handled MSAL error codes.
 */
export async function getTokenResponse(msalInstance: PublicClientApplication, acquireTokenSilent: SilentRequest, acquireTokenRedirect?: RedirectRequest) {
  return await msalInstance
    .acquireTokenSilent(acquireTokenSilent)
    .then(function (accessTokenResponse: AuthenticationResult) {
      // Acquire token silent success
      return accessTokenResponse;
    })
    .catch((err: AuthError) => {
      if (err.errorCode === "invalid_grant" || err.errorCode === "interaction_required") {
        // needed if not requesting default like "ChatMessage.Send,Chat.ReadWrite"
        // atm the permissions above requires somehow additional admin concent even though the permissions should need it...

        msalInstance.acquireTokenRedirect(acquireTokenRedirect || acquireTokenSilent);
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
