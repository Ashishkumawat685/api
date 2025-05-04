import React, { useEffect } from "react";
import { Header } from "../../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { HomeProducts } from "./homeproduct";
import { PopularProduct } from "./popularproduct";
import { Login } from "../../../Login/loginpage";
import { useNavigate } from "react-router-dom";

function Home() {
  const loginPage = useNavigate();

  const ImagesValue = [
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a3/38/3d/caption.jpg?w=1400&h=1000&s=1",
    },
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a3/cd/43/caption.jpg?w=1400&h=1000&s=1",
    },
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a2/b9/c0/caption.jpg?w=1400&h=1000&s=1",
    },
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a2/d1/cf/caption.jpg?w=1400&h=1000&s=1",
    },
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a3/a8/63/caption.jpg?w=1400&h=1000&s=1",
    },
    {
      img: "https://dynamic-media.tacdn.com/media/photo-o/2e/a3/d4/89/caption.jpg?w=1400&h=1000&s=1",
    },
  ];
  const HomePage = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("UserID")) {
      alert("Please Login first!");
      HomePage("/");
    }
  }, [HomePage]);

  return (
    <>
      <Header />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ImagesValue.map((images) => {
          return (
            <>
              <SwiperSlide key={images.id}>
                <img className="Slider_image" src={images.img} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <HomeProducts />
      <PopularProduct />
    </>
  );
}

export { Home };
