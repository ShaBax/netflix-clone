import "react-loading-skeleton/dist/skeleton.css";
import { IMovie } from "../../apis/type";
import { MovieCard } from "../movie-card";
import { CarouselDescription, CarouselList } from "./styles";
import CarouselLoader from "./carousel-loader";
import { useAppSelector } from "../../redux/hooks";
import { myMovies } from "../../redux/reducers/my-list-reducer";
import CarouselWrapper from "./carousel-wrapper";

interface ICarousel {
  title: string;
  movies: IMovie[];
  isLarge?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  onAddToList: (data: IMovie) => void;
  [key: string]: any;
}

export default function Carousel(props: ICarousel) {
  const { title, movies, isLarge, isLoading, isMulti, onAddToList, ...rest } =
    props;
  const myListMovies = useAppSelector(myMovies);

  if (isLoading) {
    return <CarouselLoader isLarge={isLarge} />;
  }

  if (!isLoading && !movies?.length) {
    return (
      <CarouselWrapper title={title}>
        <CarouselDescription>
          Sorry! currently no movies found in {title}
        </CarouselDescription>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper title={title} {...rest}>
      <CarouselList isMulti={isMulti}>
        {movies?.map((movie) => {
          const isLiked = !!myListMovies[movie?.id || -1];
          return (
            <MovieCard
              key={movie?.id}
              isLarge={isLarge}
              isLiked={isLiked}
              movie={movie}
              onAddToList={onAddToList}
            />
          );
        })}
      </CarouselList>
    </CarouselWrapper>
  );
}
