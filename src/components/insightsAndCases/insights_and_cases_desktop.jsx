import styled from "styled-components";
import cobrançaBranco from "../../assets/Projeto Multi Branco.png";
import SACBranco from "../../assets/Notificação Extra Branco.png";
import TelevendasBranco from "../../assets/Prêmio ABT Branco.png";
import BackofficeBranco from "../../assets/Agente Virtual Branco.png";
import PremioRCHL from "../../assets/Prêmio Riachuelo.png";
import Qista from "../../assets/Prêmio Qista.png";
import PremioCC from "../../assets/Prêmio CC.png";
import { useState } from "react";
export default function InsightsAndCasesDesktop() {
  const [options, setOptions] = useState("insights");
  return (
    <Container options={options}>
      <div className="options">
        <p
          onClick={() => setOptions("insights")}
          style={{
            backgroundColor: options === "insights" ? "white" : "",
            color: options === "insights" ? "black" : "white"
          }}
        >
          INSIGHTS E CASES
        </p>
        <p
          onClick={() => setOptions("resultados")}
          style={{
            backgroundColor: options === "resultados" ? "white" : "",
            color: options === "resultados" ? "black" : "white",
          }}
        >
          NOSSOS RESULTADOS
        </p>
      </div>
      {options === "insights" ? (
        <>
          <h1>INSIGHTS E CASES</h1>
          <div className="optionsItems">
            <img src={cobrançaBranco}></img>
            <img src={SACBranco}></img>
            <img src={TelevendasBranco}></img>
            <img src={BackofficeBranco}></img>
          </div>
          <section>
            <p>O futuro pede um atendimento mais dinâmico e humanizado</p>
            <p>
              Através de soluções de People Analytics traçamos perfis ideais
              para cada projeto. Com o perfil ideal, conseguimos reduzir o turn
              over para 1,2%, e entregar +272% de resultados nas operações onde
              implantamos o projeto.
            </p>
            <p>
              Redução de inadimplência: Com a ajuda dos especialistas em
              cobrança, as empresas podem reduzir significativamente os índices
              de inadimplência. Os especialistas são capazes de identificar
              padrões de pagamento e tomar medidas proativas para fazer a melhor
              oferta.
            </p>
          </section>
        </>
      ) : (
        <>
        <h1>NOSSOS RESULTADOS</h1>
        <div>
          <img src={PremioRCHL}></img>
          <img src={Qista}></img>
          <img src={PremioCC}></img>
        </div>
        </>
      )}
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
  padding: 0 40px 40px 40px;
  color: white;
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 600;
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    margin-bottom: 30px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 20px 20px ;
      height: 40px;
      width: 300px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .optionsItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    img {
      cursor: pointer;
    }
    margin-bottom: 40px;
  }
  section {
    width: 90%;
    background-color: #424267;
    border-radius: 50px;
    padding: 30px;
    p {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
`;
