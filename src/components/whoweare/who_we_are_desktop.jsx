import styled from "styled-components";
import Carousel from "./carousel";

export default function WhoWeAreDesktop() {
  return (
    <Container>
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
          <p style={{ fontSize: "16px" }}>
            “Amamos criar boas experiências por meio de resultados e
            relacionamentos significativos.”
          </p>
        </TextSection>
        <Carousel />
      </ContentWrapper>
      <ContentWrapper>
        <Carousel />
        <TextSection style={{ marginRight: "100px" }}>
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
            <br />
            • Geradores e Nobreaks Ambiente 100% Cloud – Algar Data Center
          </p>
        </TextSection>
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
  max-width: 1200px; /* Ajuste de largura máxima */
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
  margin: 20px 0;
  flex-wrap: wrap;
`;

const TextSection = styled.section`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 20px 0;
    font-size: 20px;
  }
`;
