import axios from "axios";
import { RedirectRequest } from "@azure/msal-browser";
import { useQuery } from "@tanstack/react-query";
import { injectBearerTokenMiddleware } from "./middleware";
import { getEnvConfig } from "../configuration/msalConfig";

export const graphRequest: RedirectRequest = {
    scopes: [`https://graph.microsoft.com/.default`]
};

export const graphClient = axios.create({
    baseURL: `https://graph.microsoft.com/${getEnvConfig()?.API_GRAPH_VERSION}`
});

graphClient.interceptors.request.use((e) => injectBearerTokenMiddleware(e, graphRequest, getEnvConfig()?.API_GRAPH_VERSION));

export const graphApi = {
    getPhoto(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                graphClient
                    .get<Blob>(`me/photo/$value`, {
                        responseType: "blob"
                    })
                    .then((result) => {
                        const reader = new FileReader();
                        reader.onload = function () {
                            resolve(this.result as string);
                        };
                        reader.readAsDataURL(result.data);
                    })
                    .catch(() => {});
            } catch (e) {
                reject(e);
            }
        });
    }
};

/**
 * gets photo using msal graph api
 * @param username if this is blank we will not call api
 * @param size
 * @returns
 */
export function useQueryGraphPhotoMe(username = "") {
    return useQuery<string>({
        queryKey: ["graph/photo/" + username],
        queryFn: () => {
            // since we call this outside authenticated router
            // we want to skip calling backend if there is not username
            if (!username) {
                return "";
            }

            return graphApi.getPhoto();
        }
    });
}

