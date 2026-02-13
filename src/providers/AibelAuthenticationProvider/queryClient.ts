import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import {
  communicationFailedMiddleware,
  errorInDataMiddleware,
  missingAuthMiddleware,
} from "./middleware";

/**
 * A single instance of the QueryClient should be provided to the application's QueryClientProvider wrapper.
 * You can configure this client here, which can then be retrieved through the useQueryClient hook later.
 *
 * @see https://tanstack.com/query/latest/docs/react/reference/QueryClient
 */
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, _query) => {
      missingAuthMiddleware(error);
      communicationFailedMiddleware(error);
      errorInDataMiddleware(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if (mutation.options.onError) return;

      missingAuthMiddleware(error);
      communicationFailedMiddleware(error);
      errorInDataMiddleware(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
