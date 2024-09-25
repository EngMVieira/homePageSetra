import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";

import cobrançaPreto from "../../assets/Cobrança Preto.png";
import SACPreto from "../../assets/SAC Preto.png";
import TelevendasPreto from "../../assets/Televendas Preto.png";
import BackofficePreto from "../../assets/Backoffice Preto.png";
import MesadeCréditoPreto from "../../assets/Mesa de Crédito Preto.png";
import DigitalPreto from "../../assets/Digital Preto.png";

const images = {
  cobrança: { preto: cobrançaPreto },
  SAC: { preto: SACPreto },
  Televendas: { preto: TelevendasPreto },
  Backoffice: { preto: BackofficePreto },
  MesadeCrédito: { preto: MesadeCréditoPreto },
  Digital: { preto: DigitalPreto },
};

const texts = [
    "Com equipe qualificada e sendo referência na conexão Tecnologia - Pessoas, nos diferenciamos na inovação constante, garantindo estratégias assertivas e planejadas de acordo com a particularidade de cada negócio. Atuamos na recuperação de pessoa física ou jurídica, nos segmentos de companhias elétricas, varejo, telecom, educacional, financeiro, de serviços, entre outros. Temos a expertise na recuperação de valores que vão desde o início da dívida até os atrasos mais antigos (W.O).",
    "Somos uma empresa que se destaca no mercado pelo atendimento de SAC humanizado e serviços de qualidade.Além de atendimento ao telefone, nossa equipe busca entender as necessidades de cada cliente individualmente, buscando soluções satisfatórias para cada situação. Valorizamos a satisfação do cliente e estamos sempre em busca de aprimoramento para oferecer um atendimento eficiente e resolutivo.",
    "Nosso processo de vendas cria oportunidades para o seu negócio. Essa é a vantagem de ser um cliente SETRA BPO, melhoramos a sua eficiência operacional, reduzindo custos, tempo e aumentando sua margem de lucro. Receptivo, ativo ou digital, entregamos qualidade em diferentes frentes, da informação sobre um determinado produto ou serviço à retenção de um cliente.",
    "Através do uso de ferramentas tecnológicas, a empresa garante gestão ágil e eficiente, além de transparência em todas as etapas do processo.Com nosso BackOffice, os clientes podem contar com uma gestão mais estratégica, resultando em maior produtividade e consequentemente, mais resultados para a empresa.Resultados eficientes através do monitoramento de performance, tempo de tratamento, tempo de retorno e volumes recebidos em todos os canaisTemos soluções digitais que otimizam as demandas operacionais.",
    "O segmento de mesa de crédito permite ao cliente uma gestão financeira mais eficaz, validando a partir de dados estratégicos a probabilidade de o tomador cumprir ou não o contrato.Isso aumenta a confiabilidade nas operações de análise e concessão de crédito das empresas, resultando em melhores vendas e resultados financeiros.",
    "Dispomos de soluções digitais inovadoras, desenvolvidas especialmente para atender à crescente demanda por eficiência e praticidade no relacionamento com clientes.Sabemos que a gestão de clientes pode ser um desafio, e por isso oferecemos um conjunto completo de ferramentas que visam facilitar a comunicação, reduzir custos e melhorar a experiência do usuário.Temos soluções de Portal de Autoatendimento para Clientes Inadimplentes, soluções Omnichannel de Atendimento, desenvolvimento de Chatbot com Inteligência Artificial, soluções de Agentes Virtuais de Atendimento e RPAs.",
  ];

export default function SolutionsMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)
  return (
    <Container id="solutions">
      <h1>SOLUÇÕES</h1>
      <Swiper
        spaceBetween={199}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex); // Usando realIndex
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
        <Text>{texts[activeIndex]}</Text> 
      </TextBox>
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
  padding: 20px 0;
  overflow: hidden;

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
  img{
    width: auto;
    height: auto;
  }
`;

const TextBox = styled.div`
  background-color: #424267;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
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

