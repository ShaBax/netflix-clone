import styled from "styled-components";

interface IMovieCardWrapper {
  isLarge?: boolean;
}
export const MovieCardWrapper = styled.div<IMovieCardWrapper>`
  position: relative;
  width: 100%;
  max-width: ${(props) => (props?.isLarge ? "200px" : "260px")};
  transition: transform 450ms;
  &:hover {
    opacity: 1;
    transform: ${(props) => (props?.isLarge ? "scale(1.1)" : "scale(1.05)")};
  }
`;

export const MovieCardContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  bottom: 0;
  z-index: 5;
`;

export const MovieCardTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
`;

export const MovieRating = styled.div`
  position: absolute;
  z-index: 5;
  left: 10px;
  top: 6px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid rgb(157 157 157);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  background: rgb(51, 51, 51, 0.5);
`;
