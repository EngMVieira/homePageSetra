import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import cobrançaBranco from "../../assets/Cobrança Branco.png";
import SACBranco from "../../assets/SAC Branco.png";
import TelevendasBranco from "../../assets/Televendas Branco.png";
import BackofficeBranco from "../../assets/Backoffice Branco.png";
import MesadeCréditoBranco from "../../assets/Mesa de Crédito Branco.png";
import DigitalBranco from "../../assets/Digital Branco.png";
// Componentes estilizados usando styled-components
const Container = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 25px;
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const Bubble = styled(animated.div)`
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: rgba(0, 150, 255, 0.5);
  border-radius: 25px;
  z-index: 0;
`;

export default function BubbleEffect() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    cobrançaBranco,
    SACBranco,
    TelevendasBranco,
    BackofficeBranco,
    MesadeCréditoBranco,
    DigitalBranco,
  ];
  // Usando React Spring para criar animação de movimento
  const bubbleStyle = useSpring({
    left: activeIndex * 210,
    config: { tension: 170, friction: 26 },
  });

  return (
    <Container>
      {/* Bolha animada usando React Spring */}
      <Bubble style={bubbleStyle} />
      {items.map((item, index) => (
        <Item key={index} onClick={() => setActiveIndex(index)}>
          <img src={item}></img>
        </Item>
      ))}
    </Container>
  );
}
