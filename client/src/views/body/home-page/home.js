import React from "react";
import { Navigation, EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const HomeComponent = () => {

  const slides = [
    {
      image: "images/home-img-1.jpg",
      title: "luxurious rooms",
      link: "#availability",
      buttonText: "check availability",
    },
    {
      image: "images/home-img-2.jpg",
      title: "foods and drinks",
      link: "#reservation",
      buttonText: "make a reservation",
    },
    {
      image: "images/home-img-3.jpg",
      title: "luxurious halls",
      link: "#contact",
      buttonText: "contact us",
    },
    // Add more slides if needed
  ];

  // Render slides using map() method
  const renderSlides = () => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="box swiper-slide">
          <img src={slide.image} alt="" />
          <div className="flex">
            <h3>{slide.title}</h3>
            <a href={slide.link} className="btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      </SwiperSlide>
    ));
  }

  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            effect={"coverflow"}
          >
            {renderSlides()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
