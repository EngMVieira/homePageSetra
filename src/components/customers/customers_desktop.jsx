import styled from "styled-components";
import riachuelo from "../../assets/riachuelo.webp"
import qista from "../../assets/qista.webp"
import credisystem from "../../assets/credisystem.webp"
import Midway from "../../assets/Midway.webp"
import collection from "../../assets/collection.webp"
import crefisa from "../../assets/crefisa.webp"
export default function CustomersDesktop() {
  return (
    <Container id="customers">
      <h1 >CLIENTES</h1>
      <p>
        Estes parceiros acreditaram na nossa proposta de como podemos contribuir
        para o crescimento de seus negócios. Acreditamos que existem 2 pilares
        para que essas parcerias sejam perenes: <span>Resultado</span> e{" "}
        <span>Relacionamento.</span>
      </p>
      <div>
        <img src={riachuelo}></img>
        <img src={qista}></img>
        <img src={credisystem}></img>
        <img src={Midway}></img>
        <img src={collection}></img>
        <img src={crefisa}></img>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 1250px;
  height: auto;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  p{
    font-size: 20px;
    line-height: 1.5;
    span{
        font-weight: bold;
    }
  }
  div{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;
    img{
      margin: 20px;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
