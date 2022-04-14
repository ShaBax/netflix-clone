import { apiKey } from "../util/constants";

export type movieEdpointsType =
  | "trending"
  | "netflixOriginals"
  | "topRated"
  | "actionMovies"
  | "comedyMovies";

export const movieCategories = {
  trending: {
    title: "Trending",
    endPoint: `/trending/all/week?api_key=${apiKey}`,
  },
  netflixOriginals: {
    title: "Netfilx Originals",
    endPoint: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  },
  topRated: {
    title: "Top Rated",
    endPoint: `/movie/top_rated?api_key=${apiKey}`,
  },
  actionMovies: {
    title: "Action Movies",
    endPoint: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  },
  comedyMovies: {
    title: "Comedy Movies",
    endPoint: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  },
};
