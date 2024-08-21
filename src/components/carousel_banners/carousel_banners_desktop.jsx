import styled from "styled-components";
import banner1 from "../../assets/banner.png"
export default function CarouselBannersDesktop() {
  return (
    <Container>
      <img src={banner1}></img>
    </Container>
  );
}

const Container = styled.div`
display: flex;
background-color: red;
img{
    width: 100%;
}
`;
