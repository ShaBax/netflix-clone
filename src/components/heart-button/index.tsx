import { Heart, HeartWrapper } from "./styles";
import HeartIcon from "../../icons/heart.svg";
import HeartIconFilled from "../../icons/heart-filled.svg";

interface IHeartButton {
  isLiked: boolean;
  onClick?: () => void;
}
export default function HeartButton(props: IHeartButton) {
  const { isLiked, onClick } = props;
  return (
    <HeartWrapper onClick={onClick}>
      <Heart src={isLiked ? HeartIconFilled : HeartIcon} />
    </HeartWrapper>
  );
}
