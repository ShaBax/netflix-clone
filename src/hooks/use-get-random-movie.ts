import { useGetCategoryData } from "./use-get-category-data";
import { movieCategories } from "../apis/movies";
import { getRandomNumber } from "../util/common";

export const useGetRandomMovie = () => {
  const { movies, isLoading } = useGetCategoryData(
    movieCategories.trending.title
  );

  const rand = getRandomNumber(0, movies?.length);

  return { isLoading, movie: movies?.[rand] };
};
