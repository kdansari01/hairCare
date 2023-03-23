import React from "react";
import Slider from "react-slick";
import "../../App.css";
import produc1 from "../../assests/images/product1.jpg";
import produc2 from "../../assests/images/product2.jpg";
import produc3 from "../../assests/images/product3.gif";
// import { baseUrl } from "../../../node_modules/react-slick/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
  const images = [
    {
      id: 1,
      img: produc1,
      desc: "Pure, natural oil extracted from fresh coconuts. Rich in antioxidants and medium-chain fatty acids, suitable for cooking, skincare, and haircare.",
    },
    {
      id: 2,
      img: produc2,
      desc: "Pure, natural oil extracted from fresh coconuts. Rich in antioxidants and medium-chain fatty acids, suitable for cooking, skincare, and haircare.",
    },
    {
      id: 3,
      img: produc3,
      desc: "Pure, natural oil extracted from fresh coconuts. Rich in antioxidants and medium-chain fatty acids, suitable for cooking, skincare, and haircare.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 2000,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((img) => (
          <div
            key={img.id}
            className="SliderComp d-flex justify-content-center"
          >
            <img src={img.img} alt="img" className="slidesImg" />

            {/* <p className="imgDesc">{img.desc}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
