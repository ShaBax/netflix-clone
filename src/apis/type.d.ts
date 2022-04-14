export interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  media_type?: string;
}

export interface IMovieList {
  page?: number;
  results?: IMovie[];
  total_pages?: number;
  total_results?: number;
}

export interface MovieListErrorType {
  status_message?: string;
  status_code?: number;
}
