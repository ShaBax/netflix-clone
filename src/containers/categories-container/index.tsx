import { movieCategories } from "../../apis/movies";
import Carousel from "../../components/carousel";
import { useGetCategoryData } from "../../hooks/use-get-category-data";

interface IMoviesCategory {
  title: string;
  isLarge?: boolean;
}

const MoviesCategory = ({ title, isLarge }: IMoviesCategory) => {
  const { isError, isLoading, movies } = useGetCategoryData(title);

  if (isError) return null;

  return (
    <Carousel
      title={title}
      movies={movies}
      isLarge={isLarge}
      isLoading={isLoading}
    />
  );
};

export default function CategoriesContainer() {
  return (
    <>
      {Object.values(movieCategories).map((category, index) => {
        const { title } = category;
        return (
          <MoviesCategory key={title} title={title} isLarge={index === 0} />
        );
      })}
    </>
  );
}
