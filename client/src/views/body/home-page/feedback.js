import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeedbackComponent = () => {

    const feedbacks = [
        {
            name: "john deo",
            date: "2021-05-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
        {
            name: "john deo",
            date: "2021-06-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
        {
            name: "john deo",
            date: "2021-07-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
        {
            name: "john deo",
            date: "2021-09-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
        {
            name: "john deo",
            date: "2021-10-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
        {
            name: "john deo",
            date: "2022-01-01",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo."
        },
    ]

    const renderFeedbacks = () => {
        return feedbacks.map((feedback, index) => (
            <SwiperSlide className="swiper-slide box" key={index}>
                <h3>{feedback.name}</h3>
                <p style={{"padding":"10px", "color":"white", "font-size":"10px"}}><i>{feedback.date}</i></p>
                <p>{feedback.feedback}</p>
            </SwiperSlide>
        ))
    }

    return (
        <section className="reviews" id="reviews">
            <div className="swiper-wrapper">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Pagination, A11y]}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={30}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {renderFeedbacks()}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default FeedbackComponent;