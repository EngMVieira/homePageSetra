import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/Carrosel/1.jpg";
import image2 from "../../assets/Carrosel/2.jpeg";
import image3 from "../../assets/Carrosel/3.jpeg";

// Estilos para o container do carrossel
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const CarouselItem = styled.div`
  text-align: center;
  background: #f0f0f0;
  border-radius: 10px;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 400px;
    height: 400px;
  }
`;

const items = [image1, image2, image3];

export default function Carousel1() {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "auto" }} // Garantindo que o swiper ocupe a largura total do container
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem><img src={item}></img></CarouselItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
}
