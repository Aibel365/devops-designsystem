import { ReactNode } from "react";
import { RouteObject } from "react-router";

/**
 * Local storage key used to persist decoded user information from JWT payload.
 */
export const USER_LS_VALUE: string = "USER_LS_VALUE";
/**
 * Local storage key reserved for persisted auth/environment config values.
 */
export const CONFIG_LS_VALUE: string = "CONFIG_LS_VALUE";

/**
 * Props accepted by the root application provider.
 */
export interface AibelApplicationProviderProps {
    /**
     * Runtime authentication/environment configuration persisted for MSAL setup.
     */
    env: MsalConfiguration;
    /**
     * Optional route definitions rendered through `RouterProvider` when present.
     */
    routes: RouteObject[] | undefined;
    /**
     * Optional application content rendered inside auth/query providers.
     */
    children?: ReactNode;
}

/**
 * Configuration values used by MSAL and related provider integrations.
 */
export interface MsalConfiguration {
    /** Azure AD application (client) ID for the SPA. */
    CLIENT_ID?: string;
    /** Azure AD tenant ID used to build the authority URL. */
    TENANT_ID?: string;
    /** API application ID used to construct API access scopes. */
    API_CLIENT_ID?: string;
    /** Application Insights connection string. */
    APP_INSIGHT?: string;
    /** Subscription key forwarded to APIM-protected endpoints when required. */
    OCP_APIM_SUBSCRIPTION_KEY?: string;
}
