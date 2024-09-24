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
      <CarouselBannersIndex />
       <WhoWeAreIndex />  
       <SolutionsIndex />  
       <CustomersIndex />  
       <InsightsAndCasesIndex />  
       <PortalsIndex />  
       <ContactUsIndex />  
       <CopyrightIndex />  
    </Container>
  );
}

const Container = styled.div``;
