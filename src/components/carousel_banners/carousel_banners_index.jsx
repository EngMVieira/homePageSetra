import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import CarouselBannersDesktop from "./carousel_banners_desktop";

export default function CarouselBannersIndex() {
  return (
    <Container>
      <CarouselBannersDesktop />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;
