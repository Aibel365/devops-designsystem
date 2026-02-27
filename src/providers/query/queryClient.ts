import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { communicationFailedMiddleware, errorInDataMiddleware, missingAuthMiddleware } from "./middleware";

/**
 * A single instance of the QueryClient should be provided to the application's QueryClientProvider wrapper.
 * You can configure this client here, which can then be retrieved through the useQueryClient hook later.
 *
 * Error handling policy:
 * - Query errors always pass through shared middleware.
 * - Mutation errors pass through shared middleware only when the mutation does
 *   not define its own `onError` handler.
 *
 * Query behavior policy:
 * - Query retries are disabled globally (`retry: false`) to avoid repeated
 *   requests for authentication/transport errors that are handled centrally.
 *
 * @see https://tanstack.com/query/latest/docs/react/reference/QueryClient
 */
export const queryClient = new QueryClient({
    /**
     * Global query error hook.
     *
     * Every query error is funneled through middleware that handles:
     * - missing/expired auth,
     * - transport/connectivity failures,
     * - API payload-level error states.
     */
    queryCache: new QueryCache({
        onError: (error) => {
            missingAuthMiddleware(error);
            communicationFailedMiddleware(error);
            errorInDataMiddleware(error);
        }
    }),
    /**
     * Global mutation error hook.
     *
     * If a mutation defines its own `onError`, that local handler has priority
     * and shared middleware is skipped for that mutation.
     */
    mutationCache: new MutationCache({
        onError: (error, _variables, _context, mutation) => {
            if (mutation.options.onError) return;

            missingAuthMiddleware(error);
            communicationFailedMiddleware(error);
            errorInDataMiddleware(error);
        }
    }),
    defaultOptions: {
        /**
         * Default query options for the authentication provider context.
         */
        queries: {
            retry: false
        }
    }
});
