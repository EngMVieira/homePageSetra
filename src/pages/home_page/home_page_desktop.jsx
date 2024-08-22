import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import CarouselBannersIndex from "../../components/carousel_banners/carousel_banners_index";
import WhoWeAreIndex from "../../components/whoweare/who_we_are_index";
import SolutionsIndex from "../../components/solutions/solutions_index";
import CustomersIndex from "../../components/customers/customers_index";
import InsightsAndCasesIndex from "../../components/insightsAndCases/insights_and_cases_index";
import PortalsIndex from "../../components/portals/portals_index";
import ContactUsIndex from "../../components/contactUs/contact_us_index";
import CopyrightIndex from "../../components/copyright/copyright_index";

export default function HomePageDesktop() {
  return (
    <Container>
      {useScreenSize().isDesktop ? <CarouselBannersIndex />  : ""}
      {useScreenSize().isDesktop ? <WhoWeAreIndex />  : ""}
      {useScreenSize().isDesktop ? <SolutionsIndex />  : ""}
      {useScreenSize().isDesktop ? <CustomersIndex />  : ""}
      {useScreenSize().isDesktop ? <InsightsAndCasesIndex />  : ""}
      {useScreenSize().isDesktop ? <PortalsIndex />  : ""}
      {useScreenSize().isDesktop ? <ContactUsIndex />  : ""}
      {useScreenSize().isDesktop ? <CopyrightIndex />  : ""}
    </Container>
  );
}

const Container = styled.div``;
