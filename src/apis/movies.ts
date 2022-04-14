import { apiKey } from "../util/constants";

export type movieEdpointsType =
  | "trending"
  | "netflixOriginals"
  | "topRated"
  | "documentries"
  | "romanceMovies"
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
  documentries: {
    title: "Documentries",
    endPoint: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  },
  romanceMovies: {
    title: "Romance Movies",
    endPoint: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
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
