import { useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Image } from "./styles";

interface IBaseImage {
  isLarge?: boolean;
  src: string;
  placeholder?: string;
  title?: string;
}
export default function BaseImage(props: IBaseImage) {
  const {
    src,
    placeholder = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_UoNnIFEHQ7tvcvztQb2KYz13tIIt8PBfg&usqp=CAU",
    isLarge,
    ...rest
  } = props;

  const [isImageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const currentSrc = useMemo(() => {
    if (hasError) {
      return placeholder;
    }

    if (isImageLoaded) {
      return src;
    }

    return src;
  }, [hasError, isImageLoaded, src, placeholder]);

  const isLoading = !isImageLoaded && !hasError;

  return (
    <>
      <Image
        src={currentSrc}
        onLoad={() => setImageLoaded(true)}
        onError={() => setHasError(true)}
        isLoading={isLoading}
        isLarge={isLarge}
        hasError={hasError}
        loading="lazy"
        {...rest}
      />
      {isLoading && (
        <Skeleton
          duration={2}
          width={isLarge ? "200px" : "260px"}
          height={isLarge ? "250px" : "150px"}
          baseColor="black"
          highlightColor="#141414"
        />
      )}
    </>
  );
}
