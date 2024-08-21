import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";

export default function ContactUsDesktop() {
  return (
    <Container>
      <h1>FALE CONOSCO</h1>
      <p>
        Em caso de dúvidas, sugestões ou críticas, entre em contato com nossa
        equipe! Seu retorno é fundamental para nosso aperfeiçoamento e toda
        dúvida será esclarecida
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right, #3533cd, #000000);
  padding: 40px;
  color: white;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;
