import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin-left: 20px;
  color: #fff;
`;
export const CarouselTitle = styled.h3``;
export const CarouselDescription = styled.h4`
  padding: 10px;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
`;

interface ICarouselList {
  isMulti?: boolean;
}
export const CarouselList = styled.div<ICarouselList>`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  flex-wrap: ${(props) => (props?.isMulti ? "wrap" : "nowrap")};
  row-gap: 20px;
  column-gap: 20px;
`;

export const CarouselLoaderWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const CarouselLoaderList = styled.div`
  display: flex;
  flex-gap: 20px;
  overflow: hidden;
`;
