import { IMovie } from "../../apis/type";
import Carousel from "../../components/carousel";
import { useAppSelector } from "../../redux/hooks";
import { myMovies } from "../../redux/reducers/my-list-reducer";

export default function MyListContainer() {
  const movies = useAppSelector(myMovies);

  const myListMovies: IMovie[] = Object.values(movies);

  return (
    <>
      <Carousel
        style={{ marginTop: "60px" }}
        title={"My List"}
        movies={myListMovies}
        isMulti
      />
    </>
  );
}
