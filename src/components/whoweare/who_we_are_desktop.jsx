import styled from "styled-components";

export default function WhoWeAreDesktop() {
  return (
    <Container>
      <h1>QUEM SOMOS</h1>
      <div>
        <section>
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
        </section>
        <div></div>
      </div>
      <div>
        <div></div>
        <section style={{ marginRight: "100px" }}>
          <p>
            Há poucos minutos do centro de São Paulo, dispomos de uma estrutura
            moderna para sua operação, contando com:
          </p>
          <p>
            • Salas de treinamento
            <br></br>
            • Salas de reunião
            <br></br>• Normas LGPD/PCI
            <br></br>
            • Aberto 24/7
            <br></br>
            • Geradores e Nobreaks Ambiente 100% Cloud – Algar Data Center
          </p>
        </section>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 40px;
    font-size: 30px;
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    section {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 30px;
        font-size: 20px;
        flex-wrap: wrap;
      }
    }
    div {
      width: 300px;
      height: 300px;
      background-color: gray;
    }
  }
`;
