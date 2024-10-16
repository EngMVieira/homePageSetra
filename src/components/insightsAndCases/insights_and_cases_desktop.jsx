import styled from "styled-components";
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
import { useEffect, useState } from "react";
export default function InsightsAndCasesDesktop() {
  const [options, setOptions] = useState("insights");
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage(prevImage => {
        const nextImage = (prevImage + 1) % 4; // Incrementa e faz o loop de volta ao 0 após 6
        return nextImage;
      });
    }, 6000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, []);
  const handleClick = (index) => {
    setActiveImage(index);
  };
  const images = {
    cobrança: { branco: cobrançaBranco, preto: cobrançaPreto },
    SAC: { branco: SACBranco, preto: SACPreto },
    Televendas: { branco: TelevendasBranco, preto: TelevendasPreto },
    Backoffice: { branco: BackofficeBranco, preto: BackofficePreto },
  };
  const imageKeys = Object.keys(images);
  const texts = [
    "O futuro pede um atendimento mais dinâmico e humanizado.Através de soluções de People Analytics traçamos perfis ideais para cada projeto. Com o perfil ideal, conseguimos reduzir o turn over para 1,2%, e entregar +272% de resultados nas operações onde implantamos o projeto.Redução de inadimplência: Com a ajuda dos especialistas em cobrança, as empresas podem reduzir significativamente os índices de inadimplência. Os especialistas são capazes de identificar padrões de pagamento e tomar medidas proativas para fazer a melhor oferta.Conhecimento e expertise: Possuem conhecimento aprofundado das leis e regulamentos relacionados à cobrança. Eles estão atualizados com as melhores práticas do setor e podem fornecer orientações valiosas para a empresa em termos de políticas de crédito, termos de pagamento e processos de cobrança.",
    "Ação de baixo investimento e com até 22% de retorno sobre o envio. Trata-se da notificação extrajudicial de clientes que, com base no perfil, são registrados em um cartório de notas. O fato de receber um e-mail com o assunto de “Notificação”, traz um apelo maior a cobrança e capta a atenção do cliente para com a dívida que possui.",
    "O PrêmioABT é a maior premiação em relacionamento com o cliente no Brasil e tem como propósito reconhecer e divulgar as melhores práticas desta indústria, transformando os cases vencedores em referência para o mercado.Este prêmio é resultado do esforço de uma equipe engajada com propósito. Categoria: Empresa revelação.",
    "O agente virtual exerce papel fundamental na produtividade das operações e deixou de ser um coadjuvante para se tornar o principal aliado para potencializar as ações de cobrança e Televendas. O Agente pode ser personalizado para cada cliente de acordo com região e público, permitindo diversas customizações para um atendimento cada vez mais humanizado."
  ];

  return (
    <Container options={options}>
      <div className="options">
       {/*  <p
          onClick={() => setOptions("insights")}
          style={{
            backgroundColor: options === "insights" ? "white" : "",
            color: options === "insights" ? "black" : "white",
          }}
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          CASES DE SUCESSO
        </p> */}
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
          <div className="cases">
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
        {/* </>
      ) : (
        <>
          <h1>NOSSOS RESULTADOS</h1>
          <div>
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
  width: 100%;
  background: linear-gradient(to right, #3533cd, #000000);
  padding: 0 40px 40px 40px;
  color: white;
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 600;
  }
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin-bottom: 30px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 20px 20px;
      height: 40px;
      width: 300px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .cases{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-bottom: 40px;
    div{
      padding: 100px;
      border-radius: 100%;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .optionsItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    img {
      cursor: pointer;
    }
    margin-bottom: 40px;
  }
  section {
    width: 1200px;
    background-color: #424267;
    border-radius: 50px;
    padding: 30px;
    height: auto;
    display: flex;
      align-items: center;
      justify-content: center;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      line-height: 1.5;
      height: auto;
    }
  }
`;
