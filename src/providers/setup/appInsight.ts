import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { getEnvConfig } from "../configuration/msalConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import type { ICustomProperties } from "@microsoft/applicationinsights-core-js";

/**
 * Application Insights integration for authentication-aware telemetry.
 *
 * This module:
 * - Initializes Microsoft Application Insights when a signed-in account is available.
 * - Avoids telemetry in localhost environments.
 * - Exposes safe wrappers for exception/event logging that no-op when telemetry
 *   has not been initialized.
 */

let ai: ApplicationInsights | undefined;

/**
 * Initializes Application Insights for the currently active MSAL account.
 *
 * Initialization is skipped when:
 * - `msalInstance` is missing.
 * - there is no active signed-in account.
 * - `APP_INSIGHT` connection string is missing.
 * - the app is running on localhost.
 *
 * @param msalInstance MSAL public client instance used to resolve active account.
 * @returns Environment config when no account is active; otherwise `undefined`.
 */
export async function initApplicationInsight(msalInstance: PublicClientApplication | undefined) {
    try {
        if (!msalInstance) return undefined;
        const config = getEnvConfig();

        const account = msalInstance.getActiveAccount();
        if (!account) return config;

        if (config.APP_INSIGHT && account.localAccountId) {
            const isLocalhost = location.host.toLocaleLowerCase().includes("localhost");

            if (config.APP_INSIGHT && !isLocalhost) {
                const $appInsights = new ApplicationInsights({
                    config: {
                        connectionString: config.APP_INSIGHT
                    }
                });

                $appInsights.loadAppInsights();
                $appInsights.trackPageView();
                // so we dont get wrong user count..
                $appInsights.setAuthenticatedUserContext(account.localAccountId);
                $appInsights.addTelemetryInitializer((ctx) => {
                    if (ctx.tags) {
                        ctx.tags["ai.cloud.role"] = location.host;
                    }
                });
                ai = $appInsights;
            }
        } else {
            console.error("Missing insight config");
        }
    } catch (err) {
        console.error("ApplicationInsight", err);
    }
}

/**
 * Safe, shared telemetry API.
 *
 * Methods only send telemetry when Application Insights has been initialized.
 * Otherwise they log an informational message to the console.
 */
export const appInsights = {
    /**
     * Tracks an exception in Application Insights.
     *
     * @param props Exception payload with optional custom dimensions.
     */
    trackException: (props: { exception: Error; customProperties?: ICustomProperties }) => {
        try {
            ai ? ai.appInsights.trackException(props) : console.info("ApplicationInsight not initialized - trackException error:", props);
        } catch (e) {
            console.error("ApplicationInsight", e);
        }
    },
    /**
     * Tracks a named event in Application Insights.
     *
     * @param props Event name and key/value properties.
     */
    trackEvent: (props: { name: string; properties: { [key: string]: string } }) => {
        try {
            ai ? ai.appInsights.trackEvent(props) : console.info("ApplicationInsight not initialized - trackEvent");
        } catch (e) {
            console.error("ApplicationInsight", e);
        }
    }
};

/**
 * Domain-specific telemetry helpers used by the authentication provider.
 */
export const appInsightCustomLogging = {
    /**
     * Tracks navigation target selected from the home page.
     *
     * @param whereTo Destination chosen by the user.
     */
    homePageNavigation: (whereTo: string) => {
        if (!ai || !appInsights) return null;
        return appInsights.trackEvent({
            name: "HomePageNavigation",
            properties: {
                navigateTo: whereTo
            }
        });
    },
    /**
     * Tracks page-to-page navigation.
     *
     * @param myPage New page identifier.
     */
    pageNavigation: (myPage: string) => {
        if (!ai || !appInsights) return null;
        return appInsights.trackEvent({
            name: "pageNavigation",
            properties: {
                newPage: myPage
            }
        });
    }
};
