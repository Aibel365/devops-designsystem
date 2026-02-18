import type { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { type RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { getMsalInstance } from "./setup/msalSetup";
import { initApplicationInsight } from "./setup/appInsight";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/queryClient";
import { useLocalStorage } from "../hooks";
import { AibelApplicationProviderProps, CONFIG_LS_VALUE, type MsalConfiguration } from "./types";

/**
 * Creates a browser router for authenticated application routes.
 *
 * @param routes Route definitions used by React Router.
 * @returns Configured browser router instance.
 */
export const useAuthenticatedRouter = (routes: RouteObject[]) => createBrowserRouter(routes);

/**
 * Root application provider for authentication, data fetching, and routing.
 *
 * Responsibilities:
 * - Persist incoming environment/auth config to local storage.
 * - Initialize MSAL instance and Application Insights on mount.
 * - Provide `MsalProvider` and `QueryClientProvider` once MSAL is ready.
 * - Optionally render an authenticated router when routes are provided.
 *
 * Render behavior:
 * - The provider tree is rendered only after MSAL initialization completes.
 * - `children` are rendered inside the auth/query provider context.
 * - Route rendering is optional and only enabled when `routes` has entries.
 */
export const AibelApplicationProvider = ({ routes, children, env }: AibelApplicationProviderProps) => {
    const [pca, setPca] = useState<IPublicClientApplication | undefined>(undefined);
    const [config] = useLocalStorage<MsalConfiguration>(CONFIG_LS_VALUE, env);

    useEffect(() => {
        if (config) {
            getMsalInstance().then((msalInstance) => {
                initApplicationInsight(msalInstance).then(() => {
                    setPca(msalInstance);
                });
            });
        }
    }, [config]);

    const router = useAuthenticatedRouter(routes ?? []);

    return (
        <>
            {pca && config && (
                <MsalProvider instance={pca}>
                    <QueryClientProvider client={queryClient}>
                        {children && children}
                        {routes && routes.length > 0 && router && <RouterProvider router={router} />}
                    </QueryClientProvider>
                </MsalProvider>
            )}
        </>
    );
};
