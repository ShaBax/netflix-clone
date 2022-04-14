import { IMovie } from "../../apis/type";
import Carousel from "../../components/carousel";
import { useCarousel } from "../../hooks/use-carousel";
import { useAppSelector } from "../../redux/hooks";
import { myMovies } from "../../redux/reducers/my-list-reducer";

export default function MyListPage() {
  const movies = useAppSelector(myMovies);
  const { handleOnAddToList } = useCarousel();
  const myListMovies: IMovie[] = Object.values(movies);

  return (
    <Carousel
      style={{ marginTop: "60px" }}
      onAddToList={handleOnAddToList}
      title={"My List"}
      movies={myListMovies}
      isMulti
    />
  );
}
