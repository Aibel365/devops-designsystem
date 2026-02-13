import type { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState, type ReactNode } from "react";
import {
  type RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  CONFIG_LS_VALUE,
  getMsalInstance,
} from "./AibelAuthenticationProvider/msalSetup";
import { initApplicationInsight } from "./AibelAuthenticationProvider/appInsight";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./AibelAuthenticationProvider/queryClient";
import { MsalConfiguration } from "./AibelAuthenticationProvider/msalConfig";
import { saveLocalStorageValue } from "../hooks";

export const useAuthenticatedRouter = (routes: RouteObject[]) =>
  createBrowserRouter(routes);

export interface AibelAuthenticationProviderProps {
  env: MsalConfiguration;
  routes: RouteObject[] | undefined;
  children?: ReactNode;
}

export const AibelAuthenticationProvider = ({
  routes,
  children,
  env,
}: AibelAuthenticationProviderProps) => {
  const [pca, setPca] = useState<IPublicClientApplication | undefined>(
    undefined,
  );
  saveLocalStorageValue<MsalConfiguration>(CONFIG_LS_VALUE, env);

  useEffect(() => {
    getMsalInstance().then((msalInstance) => {
      initApplicationInsight(msalInstance).then(() => {
        setPca(msalInstance);
      });
    });
  }, []);

  const router = useAuthenticatedRouter(routes ?? []);

  return (
    <>
      {pca && (
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
