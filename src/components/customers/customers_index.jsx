import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import CustomersDesktop from "./customers_desktop";

export default function CustomersIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <CustomersDesktop /> : ""}
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
