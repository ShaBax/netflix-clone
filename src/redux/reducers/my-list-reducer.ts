import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { IMovie } from "../../apis/type";
import { RootState } from "../store";

interface IKeyValuePairGeneric<T> {
  [key: string]: T;
}

export interface MyListState {
  movies: IKeyValuePairGeneric<IMovie>;
}

const initialState: MyListState = {
  movies: {},
};

export const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    updateMyList: (state, action: PayloadAction<IMovie>) => {
      const { id, name, title, original_title } = action.payload;
      const movieName = title || original_title || name;
      const currentMovieId = id || -1;
      const existingMovies = state.movies;
      const alreadyExist = existingMovies[currentMovieId];
      if (alreadyExist) {
        delete existingMovies[currentMovieId];
        toast.success(`${movieName} removed from My List`);
      } else {
        existingMovies[currentMovieId] = action.payload;
        toast.success(`${movieName} added to My List`);
      }
      state.movies = existingMovies;
    },
  },
});

export const { updateMyList } = myListSlice.actions;

export const myMovies = (state: RootState) => state.movies;

export default myListSlice.reducer;
