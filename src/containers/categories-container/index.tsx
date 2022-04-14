import { movieCategories } from "../../apis/movies";
import Carousel from "../../components/carousel";
import { useCarousel } from "../../hooks/use-carousel";
import { useGetCategoryData } from "../../hooks/use-get-category-data";

interface IMoviesCategory {
  title: string;
  isLarge?: boolean;
}

const MoviesCategory = ({ title, isLarge }: IMoviesCategory) => {
  const { isError, isLoading, movies } = useGetCategoryData(title);
  const { handleOnAddToList } = useCarousel();

  if (isError) return null;

  return (
    <Carousel
      title={title}
      onAddToList={handleOnAddToList}
      movies={movies}
      isLarge={isLarge}
      isLoading={isLoading}
    />
  );
};

export default function CategoriesContainer() {
  const categories = Object.values(movieCategories) || [];
  return (
    <>
      {categories?.map((category, index) => {
        const { title } = category;
        return (
          <MoviesCategory key={title} title={title} isLarge={index === 0} />
        );
      })}
    </>
  );
}
