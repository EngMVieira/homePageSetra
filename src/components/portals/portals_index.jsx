import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import PortalsDesktop from "./portals_desktop";
import PortalsMobile from "./portals_mobile";

export default function PortalsIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <PortalsDesktop /> : <PortalsMobile/>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
