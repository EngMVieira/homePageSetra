import styled, { keyframes } from "styled-components";
import logo from "../../assets/Logo Setra BPO.png"
export default function HeaderDesktop() {
  return (
    <Container>
        <img src={logo}></img>
      <div>
        <p>Quem Somos</p>
        <p>Soluções</p>
        <p>Clientes</p>
        <p>Portais</p>
      </div>
    </Container>
  );
}

const moveGradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

// Cria o componente Container estilizado
const Container = styled.div`
  background: linear-gradient(
    45deg,
    rgba(53, 51, 205, 1) 0%,
    rgba(0, 0, 0, 0.9) 75%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 200% 200%;
  animation: ${moveGradient} 5s linear infinite;
  height: 90px; /* Ajuste conforme necessário */
  width: 100%; /* Ajuste conforme necessário */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 40px 0 40px;
  position: relative;
  overflow: hidden;
  z-index: 50;
  div {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        cursor: pointer;
    }
  }
  img{
    width: 200px;
    cursor: pointer;
  }
`;
