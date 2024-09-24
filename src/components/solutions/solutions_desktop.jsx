import styled from "styled-components";
import cobrançaBranco from "../../assets/Cobrança Branco.png";
import cobrançaPreto from "../../assets/Cobrança Preto.png";
import SACBranco from "../../assets/SAC Branco.png";
import SACPreto from "../../assets/SAC Preto.png";
import TelevendasBranco from "../../assets/Televendas Branco.png";
import TelevendasPreto from "../../assets/Televendas Preto.png";
import BackofficeBranco from "../../assets/Backoffice Branco.png";
import BackofficePreto from "../../assets/Backoffice Preto.png";
import MesadeCréditoBranco from "../../assets/Mesa de Crédito Branco.png";
import MesadeCréditoPreto from "../../assets/Mesa de Crédito Preto.png";
import DigitalBranco from "../../assets/Digital Branco.png";
import DigitalPreto from "../../assets/Digital Preto.png";
import { useEffect, useState } from "react";

const images = {
  cobrança: { branco: cobrançaBranco, preto: cobrançaPreto },
  SAC: { branco: SACBranco, preto: SACPreto },
  Televendas: { branco: TelevendasBranco, preto: TelevendasPreto },
  Backoffice: { branco: BackofficeBranco, preto: BackofficePreto },
  MesadeCrédito: { branco: MesadeCréditoBranco, preto: MesadeCréditoPreto },
  Digital: { branco: DigitalBranco, preto: DigitalPreto },
};

const imageKeys = Object.keys(images);

const texts = [
  "Com equipe qualificada e sendo referência na conexão Tecnologia - Pessoas, nos diferenciamos na inovação constante, garantindo estratégias assertivas e planejadas de acordo com a particularidade de cada negócio. Atuamos na recuperação de pessoa física ou jurídica, nos segmentos de companhias elétricas, varejo, telecom, educacional, financeiro, de serviços, entre outros. Temos a expertise na recuperação de valores que vão desde o início da dívida até os atrasos mais antigos (W.O).",
  "Somos uma empresa que se destaca no mercado pelo atendimento de SAC humanizado e serviços de qualidade.Além de atendimento ao telefone, nossa equipe busca entender as necessidades de cada cliente individualmente, buscando soluções satisfatórias para cada situação. Valorizamos a satisfação do cliente e estamos sempre em busca de aprimoramento para oferecer um atendimento eficiente e resolutivo.",
  "Nosso processo de vendas cria oportunidades para o seu negócio. Essa é a vantagem de ser um cliente SETRA BPO, melhoramos a sua eficiência operacional, reduzindo custos, tempo e aumentando sua margem de lucro. Receptivo, ativo ou digital, entregamos qualidade em diferentes frentes, da informação sobre um determinado produto ou serviço à retenção de um cliente.",
  "Através do uso de ferramentas tecnológicas, a empresa garante gestão ágil e eficiente, além de transparência em todas as etapas do processo.Com nosso BackOffice, os clientes podem contar com uma gestão mais estratégica, resultando em maior produtividade e consequentemente, mais resultados para a empresa.Resultados eficientes através do monitoramento de performance, tempo de tratamento, tempo de retorno e volumes recebidos em todos os canaisTemos soluções digitais que otimizam as demandas operacionais.",
  "O segmento de mesa de crédito permite ao cliente uma gestão financeira mais eficaz, validando a partir de dados estratégicos a probabilidade de o tomador cumprir ou não o contrato.Isso aumenta a confiabilidade nas operações de análise e concessão de crédito das empresas, resultando em melhores vendas e resultados financeiros.",
  "Dispomos de soluções digitais inovadoras, desenvolvidas especialmente para atender à crescente demanda por eficiência e praticidade no relacionamento com clientes.Sabemos que a gestão de clientes pode ser um desafio, e por isso oferecemos um conjunto completo de ferramentas que visam facilitar a comunicação, reduzir custos e melhorar a experiência do usuário.Temos soluções de Portal de Autoatendimento para Clientes Inadimplentes, soluções Omnichannel de Atendimento, desenvolvimento de Chatbot com Inteligência Artificial, soluções de Agentes Virtuais de Atendimento e RPAs.",
];

export default function SolutionsDesktop() {
  let [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage(prevImage => {
        const nextImage = (prevImage + 1) % 6; // Incrementa e faz o loop de volta ao 0 após 6

        return nextImage;
      });
    }, 6000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, []);
  const handleClick = (index) => {
    setActiveImage(index);
  };

  return (
    <Container id="solutions">
      <h1>SOLUÇÕES</h1>
      <div>
        {imageKeys.map((key, index) => {
          const isActive = activeImage === index;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: isActive ? "white" : "transparent",
                padding: "10px",
              }}
            >
              <img
                src={isActive ? images[key].preto : images[key].branco}
                alt={key}
              />
            </div>
          );
        })}
      </div>
      <section>
        <p>
          {activeImage !== null
            ? texts[activeImage]
            : "Selecione uma imagem para ver mais detalhes."}
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
  height: 650px;
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
    width: 1200px;
    margin-bottom: 40px;
    font-size: 20px;
    div {
      width: 190px;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      cursor: pointer;
    }
  }
  section {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #424267;
    border-radius: 50px;
    padding: 30px;
    height: 250px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 250px;
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }
`;
