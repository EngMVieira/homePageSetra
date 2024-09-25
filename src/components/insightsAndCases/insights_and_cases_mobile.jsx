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
  "Com equipe qualificada e sendo referência na conexão Tecnologia - Pessoas, nos diferenciamos na inovação constante, garantindo estratégias assertivas e planejadas de acordo com a particularidade de cada negócio. Atuamos na recuperação de pessoa física ou jurídica, nos segmentos de companhias elétricas, varejo, telecom, educacional, financeiro, de serviços, entre outros. Temos a expertise na recuperação de valores que vão desde o início da dívida até os atrasos mais antigos (W.O).",
  "Somos uma empresa que se destaca no mercado pelo atendimento de SAC humanizado e serviços de qualidade.Além de atendimento ao telefone, nossa equipe busca entender as necessidades de cada cliente individualmente, buscando soluções satisfatórias para cada situação. Valorizamos a satisfação do cliente e estamos sempre em busca de aprimoramento para oferecer um atendimento eficiente e resolutivo.",
  "Nosso processo de vendas cria oportunidades para o seu negócio. Essa é a vantagem de ser um cliente SETRA BPO, melhoramos a sua eficiência operacional, reduzindo custos, tempo e aumentando sua margem de lucro. Receptivo, ativo ou digital, entregamos qualidade em diferentes frentes, da informação sobre um determinado produto ou serviço à retenção de um cliente.",
  "Através do uso de ferramentas tecnológicas, a empresa garante gestão ágil e eficiente, além de transparência em todas as etapas do processo.Com nosso BackOffice, os clientes podem contar com uma gestão mais estratégica, resultando em maior produtividade e consequentemente, mais resultados para a empresa.Resultados eficientes através do monitoramento de performance, tempo de tratamento, tempo de retorno e volumes recebidos em todos os canaisTemos soluções digitais que otimizam as demandas operacionais.",
  "O segmento de mesa de crédito permite ao cliente uma gestão financeira mais eficaz, validando a partir de dados estratégicos a probabilidade de o tomador cumprir ou não o contrato.Isso aumenta a confiabilidade nas operações de análise e concessão de crédito das empresas, resultando em melhores vendas e resultados financeiros.",
  "Dispomos de soluções digitais inovadoras, desenvolvidas especialmente para atender à crescente demanda por eficiência e praticidade no relacionamento com clientes.Sabemos que a gestão de clientes pode ser um desafio, e por isso oferecemos um conjunto completo de ferramentas que visam facilitar a comunicação, reduzir custos e melhorar a experiência do usuário.Temos soluções de Portal de Autoatendimento para Clientes Inadimplentes, soluções Omnichannel de Atendimento, desenvolvimento de Chatbot com Inteligência Artificial, soluções de Agentes Virtuais de Atendimento e RPAs.",
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
    }, 6000);

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
            backgroundColor: options === "insights" ? "white" : "",
            color: options === "insights" ? "black" : "white",
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
        </>
      ) : (
        <>
          <h1>NOSSOS RESULTADOS</h1>
          <div className="results">
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
