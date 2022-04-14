import { useMemo } from "react";
import { IMovie } from "../../apis/type";
import { truncate } from "../../util/common";
import { imageBaseUrlSmall } from "../../util/constants";
import BaseImage from "../base-image";
import HeartButton from "../heart-button";
import {
  MovieCardContent,
  MovieCardTitle,
  MovieCardWrapper,
  MovieRating,
} from "./styles";

interface IMovieCard {
  movie: IMovie;
  isLarge?: boolean;
  isLiked?: boolean;
  onAddToList: (movie: IMovie) => void;
}
export function MovieCard(props: IMovieCard) {
  const { movie, isLarge, isLiked = false, onAddToList } = props;
  const {
    poster_path,
    backdrop_path,
    vote_average,
  } = movie || {};

  const movieName = useMemo(() => {
    const { title = "", original_title = "", name = "" } = movie || [];
    return truncate(title || original_title || name, 20);
  }, [movie]);

  const imageUrl = `${imageBaseUrlSmall}/${
    isLarge ? poster_path : backdrop_path
  }`;

  return (
    <MovieCardWrapper isLarge={isLarge}>
      <MovieRating>{vote_average}</MovieRating>
      <HeartButton isLiked={isLiked} onClick={() => onAddToList(movie)} />
      <BaseImage src={imageUrl} isLarge={isLarge} title={movieName} />
      <MovieCardContent>
        {!isLarge && <MovieCardTitle>{movieName}</MovieCardTitle>}
      </MovieCardContent>
    </MovieCardWrapper>
  );
}
