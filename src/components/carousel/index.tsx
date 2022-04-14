import "react-loading-skeleton/dist/skeleton.css";
import { IMovie } from "../../apis/type";
import { MovieCard } from "../movie-card";
import {
  CarouselContainer,
  CarouselDescription,
  CarouselList,
  CarouselTitle,
} from "./styles";
import CarouselLoader from "./carousel-loader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { myMovies, updateMyList } from "../../redux/reducers/my-list-reducer";

interface ICarousel {
  title: string;
  movies: IMovie[];
  isLarge?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  [key: string]: any;
}

export default function Carousel(props: ICarousel) {
  const { title, movies, isLarge, isLoading, isMulti, ...rest } = props;

  const myListMovies = useAppSelector(myMovies);

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <CarouselLoader isLarge={isLarge} />;
  }

  if (!isLoading && !movies?.length) {
    return (
      <CarouselContainer {...rest}>
        <CarouselTitle>{title}</CarouselTitle>
        <CarouselDescription>
          Sorry! currently no movies found in {title}
        </CarouselDescription>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer {...rest}>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselList isMulti={isMulti}>
        {movies?.map((movie) => {
          const isLiked = !!myListMovies[movie?.id || -1];
          return (
            <MovieCard
              key={movie?.id}
              isLarge={isLarge}
              isLiked={isLiked}
              movie={movie}
              onAddToList={(data) => dispatch(updateMyList(data))}
            />
          );
        })}
      </CarouselList>
    </CarouselContainer>
  );
}
