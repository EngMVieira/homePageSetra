import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import CopyrightDesktop from "./copyright_desktop";

export default function CopyrightIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <CopyrightDesktop /> : ""}
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
