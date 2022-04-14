import { CarouselContainer, CarouselTitle } from "./styles";

interface ICarouselWrapper {
  title?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export default function CarouselWrapper(props: ICarouselWrapper) {
  const { title, children, ...rest } = props;
  return (
    <CarouselContainer {...rest}>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      {children}
    </CarouselContainer>
  );
}
