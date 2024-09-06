import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import call from "../../assets/Call.png";
import DP from "../../assets/DP.png";
import Local from "../../assets/Local.png";
import Mail from "../../assets/Mail.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactUsDesktop() {
  const [inputs, setInputs] = useState();
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const [loading, setLoading] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      from_name: inputs.name,
      surname: inputs.surname,
      email: inputs.email,
      phone: inputs.phone,
      enterprise: inputs.enterprise,
      subject: inputs.subject,
      message: inputs.message,
    };
    setLoading(true)
    emailjs
      .send(
        "service_4mm0sdg",
        "template_v9yssqi",
        templateParams,
        "VAXZ1FGQaFHH7Aa_l"
      )
      .then((resp) => {
        alert("Formulário enviado com sucesso!")
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  }
  return (
    <Container>
      <h1>FALE CONOSCO</h1>
      <p>
        Em caso de dúvidas, sugestões ou críticas, entre em contato com nossa
        equipe! Seu retorno é fundamental para nosso aperfeiçoamento e toda
        dúvida será esclarecida
      </p>
      <div className="items">
        <div className="forms">
          <form onSubmit={sendEmail}>
            <div>
              <input
                placeholder="Nome"
                name="name"
                onChange={handleInputChange}
                required
              ></input>
              <input
                placeholder="Sobre Nome"
                name="surname"
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleInputChange}
              required
            ></input>
            <div>
              <input
                placeholder="Telefone"
                name="phone"
                onChange={handleInputChange}
                required
              ></input>
              <input
                placeholder="Empresa"
                name="enterprise"
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <input
              placeholder="Assunto"
              name="subject"
              onChange={handleInputChange}
              required
            ></input>
            <input
              placeholder="Mensagem"
              name="message"
              onChange={handleInputChange}
              required
            ></input>
            <div className="checkbox">
              <input type="checkbox" required></input>
              <p>
                Eu aceito receber notícias relevantes do setor, relatórios
                analíticos, white papers, cases e informações sobre produtos da
                SETRA BPO. A SETRA BPO nunca compartilhará ou venderá suas
                informações a terceiros.
                <span> Consulte a Política de Privacidade da SETRA BPO.</span>
              </p>
            </div>
            {loading ? <button disabled={true}>Enviando...</button> : <button>Enviar</button>}
          </form>
        </div>
        <div className="contact">
          <div>
            <img src={call}></img>
            <p>(11) 4659-0419</p>
          </div>
          <div>
            <img src={DP}></img>
            <p>contato@setrabpo.com.br</p>
          </div>
          <div>
            <img src={Local}></img>
            <p>
              R. Niterói, 400 - Centro, São Caetano do Sul-SP CEP 09510-200,
              Brasil
            </p>
          </div>
          <div>
            <img src={Mail}></img>
            <p>rh@setrabpo.com.br</p>
          </div>
          <div className="links">
            <p>POLÍTICA DE PRIVACIDADE</p>
            <p>TERMOS DE USO</p>
            <p>CONFIGURAÇÕES DE COOKIES</p>
            <div className="media">
              <p>Siga-nos</p>
              <div>
                <img src={facebook}></img>
                <img src={instagram}></img>
                <img src={linkedin}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  padding: 40px;
  color: white;
  .items {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    .contact {
      height: 440px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 50px;
      .links {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        /* margin-top: 40px; */
        p {
          font-size: 14px;
        }
        .media {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin-top: 20px;
          p {
            margin-bottom: 5px;
          }
          img {
            width: 30px;
          }
        }
      }
      div {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          margin-right: 10px;
        }
      }
    }
  }
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .forms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 40px;
    width: 600px;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input {
        border-radius: 20px;
        border: 1px solid #3533cd;
        width: 100%;
        height: 30px;
        padding: 20px;
        margin-bottom: 10px;
        color: #3533cd;
      }
      div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        input {
          width: 250px;
        }
      }
      button {
        background: linear-gradient(to right, #3533cd, #000000);
        border: none;
        color: white;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        font-size: 20px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
    .checkbox {
      color: black;
      display: flex;
      align-items: start;
      p {
        font-size: 14px;
      }
      input {
        cursor: pointer;
        width: 20px;
        height: 15px;
        margin: 0;
      }
      span {
        color: red;
        cursor: pointer;
      }
    }
  }
`;
