import React from "react";
import { Navigation, EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const GalleryComponent = () => {

    const images = [
        {
            image: "images/gallery-img-1.jpg",
        },
        {
            image: "images/gallery-img-2.webp",
        },
        {
            image: "images/gallery-img-3.webp",
        },
        {
            image: "images/gallery-img-4.webp",
        },
        {
            image: "images/gallery-img-5.webp",
        },
        {
            image: "images/gallery-img-6.webp",
        }
        // Add more slides if needed
    ];

    // Render slides using map() method
    const renderImages = () => {
        return images.map((img, index) => (
            <SwiperSlide key={index}>
                <div className="swiper-slide">
                    <img src={img.image} alt="" />
                </div>
            </SwiperSlide>
        ));
    }

    return (
        <section class="gallery" id="gallery">
            <div className="swiper gallery-slider">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={2}
                        centeredSlides={true}
                        grabCursor={true}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        effect={"coverflow"}
                    >
                        {renderImages()}
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default GalleryComponent;
