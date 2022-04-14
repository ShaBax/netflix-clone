import styled from "styled-components/macro";

interface IBanner {
  backgroundImage?: string;
}
export const BannerBackground = styled.div<IBanner>`
  position: relative;
  height: 448px;
  color: #fff;
  object-fit: contain;

  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props?.backgroundImage});
  background-color: #000;
`;

export const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;
export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
export const BannerDescription = styled.h2`
  color: #fff;
  font-weight: 500;
  line-height: 1.3;
  height: 80px;
  width: 45rem;
  max-width: 360px;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;
export const BannerButtonWrapper = styled.div`
  padding-top: 1rem;
`;
export const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  background-color: rgb(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BannerBottomFade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
