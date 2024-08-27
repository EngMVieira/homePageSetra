import styled from "styled-components";
import cobrançaBranco from "../../assets/Cobrança Branco.png";
import SACBranco from "../../assets/SAC Branco.png";
import TelevendasBranco from "../../assets/Televendas Branco.png";
import BackofficeBranco from "../../assets/Backoffice Branco.png";
import MesadeCréditoBranco from "../../assets/Mesa de Crédito Branco.png";
import DigitalBranco from "../../assets/Digital Branco.png";
import { useState } from "react";
import { motion } from "framer-motion";
import BubbleEffect from "./effect_bubble";

export default function SolutionsDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    cobrançaBranco,
    SACBranco,
    TelevendasBranco,
    BackofficeBranco,
    MesadeCréditoBranco,
    DigitalBranco,
  ];
  return (
    <Container>
      <h1>SOLUÇÕES</h1>
      <BubbleEffect/>

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
  /* div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 40px;
    font-size: 20px;
  } */
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

const Item = styled.div`
  flex: 1;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  z-index: 0;
`;
