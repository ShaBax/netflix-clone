import Banner from "../../components/banner";
import { useGetRandomMovie } from "../../hooks/use-get-random-movie";
import { imageBaseUrlLarge } from "../../util/constants";
import { useNavigate } from "react-router-dom";

export default function BannerContainer() {
  const navigate = useNavigate();
  const { movie } = useGetRandomMovie();
  return (
    <Banner
      title={movie?.title ?? ""}
      description={movie?.overview ?? ""}
      imageUrl={`${imageBaseUrlLarge}${movie?.backdrop_path}`}
      onClickMyList={() => {
        navigate("/my-list");
      }}
    />
  );
}
