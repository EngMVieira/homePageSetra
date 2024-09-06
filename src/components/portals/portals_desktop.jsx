import styled from "styled-components";
import desembaraça from "../../assets/Desembaraça.png";
import painel from "../../assets/Painel Setra.png";
export default function PortalsDesktop() {
  return (
    <Container>
      <h1>PORTAIS</h1>
      <section>
        <div>
          <p>
            Renegocie sua dívida onde estiver e quando quiser. Acesse nosso
            portal de auto negociação Desembaraça e consulte as opções
            disponíveis para você.
          </p>
          <button>Desembaraça</button>
        </div>
        <img src={desembaraça}></img>
      </section>
      <section>
        <img src={painel}></img>
        <div>
          <p>
            Consulte os dados e resultados da sua operação em tempo real. Acesse
            o Painel SETRA e tenha a informação na palma da mão.
          </p>
          <a href="https://painel.setrabpo.com.br" target="_blank">
            <button>Painel Setra</button>
          </a>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
  p{
    font-size: 20px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        background: linear-gradient(to right, #3533cd, #000000);
        border: none;
        width: 300px;
        height: 40px;
        color: white;
        border-radius: 20px;
        font-size: 20px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
`;
