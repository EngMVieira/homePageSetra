import styled from "styled-components";
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";

export default function WhoWheAreMobile() {
  return (
    <Container id="whoweare">
      <h1>QUEM SOMOS</h1>
      <ContentWrapper>
        <TextSection>
          <p>
            Somos especialistas em oferecer serviços customizados de
            terceirização de atendimento ao cliente.
          </p>
          <p>
            Atuamos em todas as fases do relacionamento com o cliente, com
            soluções inovadoras e resultados consistentes que nos garantem
            protagonismo no mercado de BPO.
          </p>
          <p>
            Atuamos com Serviço de Atendimento ao cliente, CX, Televendas,
            Recuperação de Crédito, Backoffice, Mesa de Crédito, Omnichannel e
            serviços digitais.
          </p>
        </TextSection>
        <Carousel1 />
      </ContentWrapper>
      <ContentWrapper>
        <TextSection>
          <p>
            Há poucos minutos do centro de São Paulo, dispomos de uma estrutura
            moderna para sua operação, contando com:
          </p>
          <p>
            • Salas de treinamento
            <br />
            • Salas de reunião
            <br />
            • Normas LGPD/PCI
            <br />
            • Aberto 24/7
            <br />• Geradores e Nobreaks Ambiente 100% Cloud – Algar Data Center
          </p>
        </TextSection>
        <Carousel2 />
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto; /* Centralizar o container na página */
  h1 {
    margin-top: 40px;

    font-size: 30px;
    font-weight: 600;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const TextSection = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 20px 0;
    font-size: 20px;
    line-height: 1.5;
  }
`;
