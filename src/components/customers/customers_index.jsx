import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import CustomersDesktop from "./customers_desktop";
import CustomersMobile from "./customers_mobile";

export default function CustomersIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <CustomersDesktop /> : <CustomersMobile/>}
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
