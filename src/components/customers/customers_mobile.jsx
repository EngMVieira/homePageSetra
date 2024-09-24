import styled from "styled-components";
import riachuelo from "../../assets/riachuelo.webp";
import qista from "../../assets/qista.webp";
import credisystem from "../../assets/credisystem.webp";
import Midway from "../../assets/Midway.webp";
import collection from "../../assets/collection.webp";
import crefisa from "../../assets/crefisa.webp";

export default function CustomersMobile() {
  return (
    <Container id="customers">
      <h1>CLIENTES</h1>
      <p>
        Estes parceiros acreditaram na nossa proposta de como podemos contribuir
        para o crescimento de seus negócios. Acreditamos que existem 2 pilares
        para que essas parcerias sejam perenes: <span>Resultado</span> e{" "}
        <span>Relacionamento.</span>
      </p>
      <ImageList>
        <ImageRow>
          <img src={riachuelo} alt="Riachuelo" style={{height: "54px"}}/>
          <img src={qista} alt="Qista" />
        </ImageRow>
        <ImageRow>
          <img src={credisystem} alt="Credisystem" />
          <img src={Midway} alt="Midway" style={{height: "54px"}}/>
        </ImageRow>
        <ImageRow>
          <img src={collection} alt="Collection" />
          <img src={crefisa} alt="Crefisa" />
        </ImageRow>
      </ImageList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%; // Ajuste conforme necessário
  height: auto;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;

    span {
      font-weight: bold;
    }
  }
`;

const ImageList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column; // Para agrupar linhas de imagens
  align-items: center; // Centraliza as linhas de imagens
  width: 100%; // Ajuste conforme necessário
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center; // Centraliza as imagens em cada linha
  margin: 10px 0; // Espaçamento vertical entre as linhas

  img {
    margin: 0 10px; // Espaçamento horizontal entre as imagens
    max-width: 300px; // Reduz o tamanho das imagens
    height: auto; // Mantém a proporção da imagem
  }
`;