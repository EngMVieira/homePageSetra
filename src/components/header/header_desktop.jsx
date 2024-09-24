import styled, { keyframes } from "styled-components";
import logo from "../../assets/Logo Setra BPO.png";
import logoMobile from "../../assets/Favicon.png";
import useScreenSize from "../../hooks/useScreenSize";
import SideBoxMobile from "./side_box_mobile";
export default function HeaderDesktop() {
  const { isMobile } = useScreenSize();
  return (
    <Container isMobile={isMobile}>
      {isMobile ? (
        <>
          <img src={logoMobile}></img>
          <SideBoxMobile />
        </>
      ) : (
        <>
          <img src={logo}></img>{" "}
          <div>
            <p>
              <a href="#whoweare">Quem Somos</a>
            </p>
            <p>
              <a href="#solutions">Soluções</a>
            </p>
            <p>
              <a href="#customers">Clientes</a>
            </p>
            <p>
              <a href="#portals">Portais</a>
            </p>
          </div>
        </>
      )}
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
  height: ${({isMobile}) => (isMobile ? '60px' : '90px')}; 
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
    width: ${({isMobile}) => (isMobile ? '30px' : '450px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      cursor: pointer;
    }
  }
  img {
    width: ${({isMobile}) => (isMobile ? '30px' : '200px')};
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
