import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";

export default function CopyrightDesktop() {
  return (
    <Container>
      <p>@COPYRIGHT 2024 | SETRA SOLUCOES EM ATENDIMENTO LTDA. CNPJ 47.349.658/0001-77 - TODOS OS DIREITOS RESERVADOS.</p>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60px;
`;
