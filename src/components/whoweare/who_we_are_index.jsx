import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import WhoWeAreDesktop from "./who_we_are_desktop";
import WhoWheAreMobile from "./who_we_are_mobile";

export default function WhoWeAreIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <WhoWeAreDesktop /> : <WhoWheAreMobile/>}
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: auto;
`;
