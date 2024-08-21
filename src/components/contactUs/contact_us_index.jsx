import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import ContactUsDesktop from "./contact_us_desktop";

export default function ContactUsIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <ContactUsDesktop /> : ""}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
