import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import HomePageDesktop from "./home_page_desktop";

export default function HomePageIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <HomePageDesktop /> : ""}
    </Container>
  );
}

const Container = styled.div``;
