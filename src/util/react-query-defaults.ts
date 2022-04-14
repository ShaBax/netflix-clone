import toast from "react-hot-toast";
import { QueryCache } from "react-query";

export const reactQueryDefaults = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any) => {
      const msg = error?.message;
      toast.error(msg ?? "Something went wrong");
    },
  }),
};
