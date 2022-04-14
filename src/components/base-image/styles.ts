import styled from "styled-components";

interface IImage {
  isLarge?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
}

export const Image = styled.img<IImage>`
  object-fit: ${(props) => (props.hasError ? "cover" : "contain")};
  height: ${(props) => (props.hasError ? "100%" : "auto")};
  max-height: ${(props) => {
    if (props.isLoading) {
      return "0px";
    }
    return props?.isLarge ? "250px" : "150px";
  }};
  width: ${(props) =>
    props?.hasError ? (props.isLarge ? "200px" : "300px") : "auto"};
`;
