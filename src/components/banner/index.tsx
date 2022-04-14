import { truncate } from "../../util/common";
import {
  BannerBackground,
  BannerBottomFade,
  BannerButton,
  BannerButtonWrapper,
  BannerContent,
  BannerDescription,
  BannerTitle,
} from "./styles";

interface IBanner {
  imageUrl: string;
  title: string;
  description: string;
  onClickPlay?: () => void;
  onClickMyList?: () => void;
}
export default function Banner(props: IBanner) {
  const { imageUrl, title, description, onClickPlay, onClickMyList } = props;
  return (
    <BannerBackground backgroundImage={imageUrl}>
      <BannerContent>
        <BannerTitle>{title}</BannerTitle>
        <BannerButtonWrapper>
          <BannerButton onCanPlay={onClickPlay}>Play</BannerButton>
          <BannerButton onClick={onClickMyList}>My List</BannerButton>
        </BannerButtonWrapper>
        <BannerDescription>{truncate(description, 150)}</BannerDescription>
      </BannerContent>
      <BannerBottomFade />
    </BannerBackground>
  );
}
