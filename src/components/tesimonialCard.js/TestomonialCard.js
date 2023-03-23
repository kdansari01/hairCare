import React from "react";
import "./card.css";
import feedBack from "./CardData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestomonialCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg ">
        <Slider {...settings}>
          {feedBack.map((feedback) => (
            <div
              className="sliderCards d-flex justify-content-center"
              key={feedback.id}
            >
              <div className="containers">
                <figure className="snip1192 ">
                  <blockquote>
                    {/* Calvin: Sometimes when I'm talking with others, my words can't keep
            up with my thoughts. I wonder why we think faster than we speak.
            Hobbes: Probably so we can think twice. */}
                    {feedback.desc}
                  </blockquote>
                  <div className="author">
                    <img src={feedback.img} alt="sq-sample1" />
                    <h5>
                      {feedback.Fauthor} <span> {feedback.Lauthor}</span>
                    </h5>
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestomonialCard;
