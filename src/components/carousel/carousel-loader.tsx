import Skeleton from "react-loading-skeleton";
import { CarouselLoaderList, CarouselLoaderWrapper } from "./styles";

interface ICarouselLoader {
  isLarge?: boolean;
  hideTitle?: boolean;
}
export default function CarouselLoader({
  isLarge,
  hideTitle,
}: ICarouselLoader) {
  return (
    <CarouselLoaderWrapper>
      {!hideTitle && (
        <Skeleton
          duration={2}
          style={{ margin: "10px 0", height: "30px", width: "200px" }}
          baseColor="black"
          highlightColor="#141414"
        />
      )}
      <CarouselLoaderList>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              duration={2}
              key={index}
              style={{ marginRight: "20px" }}
              width={isLarge ? "200px" : "300px"}
              height={isLarge ? "250px" : "150px"}
              baseColor="black"
              highlightColor="#141414"
            />
          ))}
      </CarouselLoaderList>
    </CarouselLoaderWrapper>
  );
}
