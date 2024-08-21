import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import WhoWeAreDesktop from "./who_we_are_desktop";

export default function WhoWeAreIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <WhoWeAreDesktop /> : ""}
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: auto;
`;
