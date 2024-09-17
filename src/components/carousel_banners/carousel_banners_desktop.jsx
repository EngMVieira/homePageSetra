import styled from "styled-components";
import banner1 from "../../assets/Banners Institucional/1.png";
import banner2 from "../../assets/Banners Institucional/2.png";
import banner3 from "../../assets/Banners Institucional/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function CarouselBannersDesktop() {
  const items = [banner1, banner2, banner3];
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        navigation={true}
        style={{ width: "100%", height: "auto" }} // Garantindo que o swiper ocupe a largura total do container
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem>
              <img src={item}></img>
            </CarouselItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  img {
    width: 100%;
  }
`;


const CarouselItem = styled.div`
  text-align: center;
  background: #f0f0f0;
  border-radius: 10px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 300px;
  }
`;