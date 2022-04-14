import { useQueryClient } from "react-query";
import { IMovieList } from "../apis/type";

export const useGetCategoryData = (title: string) => {
  const queryClient = useQueryClient();
  const { status, data } = queryClient.getQueryState<IMovieList>([title]) || {};

  const isError = status === "error";
  const isLoading = !isError && status !== "success";
  const movies = data?.results || [];

  return { isError, isLoading, movies };
};
