import React from "react";
import { Navigation, EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const HomeComponent = () => {
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
            <SwiperSlide>
              <div className="box swiper-slide">
                <img src="images/home-img-1.jpg" alt="" />
                <div className="flex">
                  <h3>luxurious rooms</h3>
                  <a href="#availability" className="btn">
                    check availability
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box swiper-slide">
                <img src="images/home-img-2.jpg" alt="" />
                <div className="flex">
                  <h3>foods and drinks</h3>
                  <a href="#reservation" className="btn">
                    make a reservation
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box swiper-slide">
                <img src="images/home-img-3.jpg" alt="" />
                <div className="flex">
                  <h3>luxurious halls</h3>
                  <a href="#contact" className="btn">
                    contact us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
