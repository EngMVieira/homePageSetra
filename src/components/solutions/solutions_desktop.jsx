import styled from "styled-components";
import cobrançaBranco from "../../assets/Cobrança Branco.png";
import SACBranco from "../../assets/SAC Branco.png";
import TelevendasBranco from "../../assets/Televendas Branco.png";
import BackofficeBranco from "../../assets/Backoffice Branco.png";
import MesadeCréditoBranco from "../../assets/Mesa de Crédito Branco.png";
import DigitalBranco from "../../assets/Digital Branco.png";

export default function SolutionsDesktop() {
  return (
    <Container>
      <h1>SOLUÇÕES</h1>
      <div>
        <img src={cobrançaBranco}></img>
        <img src={SACBranco}></img>
        <img src={TelevendasBranco}></img>
        <img src={BackofficeBranco}></img>
        <img src={MesadeCréditoBranco}></img>
        <img src={DigitalBranco}></img>
      </div>
      <section>
        <p>
          Com equipe qualificada e sendo referência na conexão Tecnologia -
          Pessoas, nos diferenciamos na inovação constante, garantindo
          estratégias assertivas e planejadas de acordo com a particularidade de
          cada negócio.
        </p>
        <p>
          Atuamos na recuperação de pessoa física ou jurídica, nos segmentos de
          companhias elétricas, varejo, telecom, educacional, financeiro, de
          serviços, entre outros. Temos a expertise na recuperação de valores
          que vão desde o início da dívida até os atrasos mais antigos (W.O).
        </p>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #3533cd, #000000);
  width: 100%;
  color: white;
  padding: 40px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 40px;
    font-size: 20px;
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
