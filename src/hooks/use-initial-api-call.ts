import { useQueries } from "react-query";
import { fetchApi } from "../apis/axios";
import { movieCategories } from "../apis/movies";

export const useInitailApiCall = () => {
  const queries = Object.values(movieCategories).map((category) => {
    return {
      queryKey: [category.title],
      queryFn: () => fetchApi(category.endPoint),
    };
  });

  return useQueries(queries);
};
