import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import HeaderDesktop from "./header_desktop";

export default function HeaderIndex() {
  return (
    <Container>{useScreenSize().isDesktop ? <HeaderDesktop /> : ""}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
