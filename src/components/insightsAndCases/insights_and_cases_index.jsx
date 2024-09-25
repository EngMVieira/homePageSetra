import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import InsightsAndCasesDesktop from "./insights_and_cases_desktop";
import InsightsAndCasesMobile from "./insights_and_cases_mobile";

export default function InsightsAndCasesIndex() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <InsightsAndCasesDesktop /> : <InsightsAndCasesMobile/>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
