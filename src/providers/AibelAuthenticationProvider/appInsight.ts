import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { getEnvConfig } from "./msalConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import type { ICustomProperties } from "@microsoft/applicationinsights-core-js";

let ai: ApplicationInsights | undefined;

export async function initApplicationInsight(
  msalInstance: PublicClientApplication | undefined,
) {
  try {
    if (!msalInstance) return undefined;
    const config = getEnvConfig();

    const account = msalInstance.getActiveAccount();
    if (!account) return config;

    if (config.APP_INSIGHT && account.localAccountId) {
      const isLocalhost = location.host
        .toLocaleLowerCase()
        .includes("localhost");

      if (config.APP_INSIGHT && !isLocalhost) {
        const $appInsights = new ApplicationInsights({
          config: {
            connectionString: config.APP_INSIGHT,
          },
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

export const appInsights = {
  trackException: (props: {
    exception: Error;
    customProperties?: ICustomProperties;
  }) => {
    try {
      ai
        ? ai.appInsights.trackException(props)
        : console.info(
            "ApplicationInsight not initialized - trackException error:",
            props,
          );
    } catch (e) {
      console.error("ApplicationInsight", e);
    }
  },
  trackEvent: (props: {
    name: string;
    properties: { [key: string]: string };
  }) => {
    try {
      ai
        ? ai.appInsights.trackEvent(props)
        : console.info("ApplicationInsight not initialized - trackEvent");
    } catch (e) {
      console.error("ApplicationInsight", e);
    }
  },
};

export const appInsightCustomLogging = {
  homePageNavigation: (whereTo: string) => {
    if (!ai || !appInsights) return null;
    return appInsights.trackEvent({
      name: "HomePageNavigation",
      properties: {
        navigateTo: whereTo,
      },
    });
  },
  pageNavigation: (myPage: string) => {
    if (!ai || !appInsights) return null;
    return appInsights.trackEvent({
      name: "pageNavigation",
      properties: {
        newPage: myPage,
      },
    });
  },
};
