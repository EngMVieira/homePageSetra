import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

import cobrançaBranco from "../../assets/Projeto Multi Branco.png";
import cobrançaPreto from "../../assets/Projeto Multi Preto.png";
import SACBranco from "../../assets/Notificação Extra Branco.png";
import SACPreto from "../../assets/Notificação Extra Preto.png";
import TelevendasBranco from "../../assets/Prêmio ABT Branco.png";
import TelevendasPreto from "../../assets/Prêmio ABT Preto.png";
import BackofficeBranco from "../../assets/Agente Virtual Branco.png";
import BackofficePreto from "../../assets/Agente Virtual Preto.png";
import PremioRCHL from "../../assets/Prêmio Riachuelo.png";
import Qista from "../../assets/Prêmio Qista.png";
import PremioCC from "../../assets/Prêmio CC.png";

const images = {
  cobrança: { branco: cobrançaBranco, preto: cobrançaPreto },
  SAC: { branco: SACBranco, preto: SACPreto },
  Televendas: { branco: TelevendasBranco, preto: TelevendasPreto },
  Backoffice: { branco: BackofficeBranco, preto: BackofficePreto },
};

const texts = [
  "O futuro pede um atendimento mais dinâmico e humanizado.Através de soluções de People Analytics traçamos perfis ideais para cada projeto. Com o perfil ideal, conseguimos reduzir o turn over para 1,2%, e entregar +272% de resultados nas operações onde implantamos o projeto.Redução de inadimplência: Com a ajuda dos especialistas em cobrança, as empresas podem reduzir significativamente os índices de inadimplência. Os especialistas são capazes de identificar padrões de pagamento e tomar medidas proativas para fazer a melhor oferta. Conhecimento e expertise: Possuem conhecimento aprofundado das leis e regulamentos relacionados à cobrança. Eles estão atualizados com as melhores práticas do setor e podem fornecer orientações valiosas para a empresa em termos de políticas de crédito, termos de pagamento e processos de cobrança.",
  "Ação de baixo investimento e com até 22% de retorno sobre o envio. Trata-se da notificação extrajudicial de clientes que, com base no perfil, são registrados em um cartório de notas. O fato de receber um e-mail com o assunto de “Notificação”, traz um apelo maior a cobrança e capta a atenção do cliente para com a dívida que possui.",
  "O PrêmioABT é a maior premiação em relacionamento com o cliente no Brasil e tem como propósito reconhecer e divulgar as melhores práticas desta indústria, transformando os cases vencedores em referência para o mercado.Este prêmio é resultado do esforço de uma equipe engajada com propósito. Categoria: Empresa revelação.",
  "O agente virtual exerce papel fundamental na produtividade das operações e deixou de ser um coadjuvante para se tornar o principal aliado para potencializar as ações de cobrança e Televendas. O Agente pode ser personalizado para cada cliente de acordo com região e público, permitindo diversas customizações para um atendimento cada vez mais humanizado."
];

export default function InsightsAndCasesMobile() {
  const [activeImage, setActiveImage] = useState(0);
  const [options, setOptions] = useState("insights");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prevImage) => {
        const nextImage = (prevImage + 1) % 4; // Incrementa e faz o loop de volta ao 0 após 6
        return nextImage;
      });
    }, 8000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, []);
  const handleClick = (index) => {
    setActiveImage(index);
  };
  return (
    <Container>
      <div className="options">
        <p
          onClick={() => setOptions("insights")}
          style={{
            backgroundColor:"white",
            color: "black",
          }}
        >
          CASES DE SUCESSO
        </p>
        {/* <p
          onClick={() => setOptions("resultados")}
          style={{
            backgroundColor: options === "resultados" ? "white" : "",
            color: options === "resultados" ? "black" : "white",
          }}
        >
          NOSSOS RESULTADOS
        </p> */}
      </div>
      {/* {options === "insights" ? (
        <> */}
          <h1>CASES DE SUCESSO</h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            onSlideChange={(swiper) => {
              setActiveImage(swiper.realIndex); // Usando realIndex
            }}
          >
            {Object.keys(images).map((key, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <SlideContainer>
                  <ImageWrapper>
                    <img src={images[key].preto} alt={key} />
                  </ImageWrapper>
                </SlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
          <TextBox>
            <Text>{texts[activeImage]}</Text>
          </TextBox>{" "}
        {/* </>
      ) : (
        <>
          <h1>NOSSOS RESULTADOS</h1>
          <div className="results">
            <img src={PremioRCHL}></img>
            <img src={Qista}></img>
            <img src={PremioCC}></img>
          </div>
        </>
      )} */}
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
  padding-bottom: 20px;
  overflow: hidden;
  .results{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 20px 20px;
      height: 40px;
      width: 100%;
      font-size: 15px;
      cursor: pointer;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
    text-align: center;
  }

  .swiper {
    width: 100%;
    overflow: hidden;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px; // Mantém a imagem em uma área circular

  img {
    width: auto; // Define uma largura relativa para que a imagem se ajuste
    height: auto; // Mantém a proporção da imagem
  }
`;

const TextBox = styled.div`
  background-color: #424267;
  padding: 15px 20px;
  margin-top: 20px;
  border-radius: 8px; // Ajuste para um canto mais suave
  width: 90%; // Ajuste conforme necessário
  max-width: 600px; // Define um max-width para garantir que não fique muito estreito
  display: flex;
  justify-content: center; // Centraliza o texto
`;

const Text = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  white-space: normal; // Permite quebra de linha normal
  margin: 0; // Remove margens para evitar espaço extra
`;
