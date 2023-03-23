import React from "react";
import "./recomnderFor.css";
import { recomdedData } from "./RecomndedData";
const Recomnded = () => {
  return (
    <div className="mainContainer row col-12 d-flex justify-content-center">
      {recomdedData.map((item) => (
        <div className="d-flex col-lg-6 col-md-6 col-12 justify-content-center   ">
          <section className="product justify-content-evenly ">
            <div className="product__photo ">
              <div className="photo-container ">
                <div className="photo-main d-flex justify-content-center">
                  <img src={item.img} alt="product" className="productImges" />
                </div>
              </div>
            </div>
            <div className="product__info">
              <div className="title">
                <h1>{item.title}</h1>
              </div>
              <div className="price">
                R$ <span>{item.price}</span>
              </div>
              <div className="variant">
                <ul>
                  <li className="nav-link ">
                    <img src={item.descImg1} alt="green apple" />
                  </li>
                  <li className="nav-link ">
                    <img src={item.descImg2} alt="green apple" />
                  </li>
                  <li className="nav-link ">
                    <img src={item.descImg3} alt="green apple" />
                  </li>
                </ul>
              </div>
              <div className="description">
                <h3>BENEFITS</h3>
                <ul>
                  <li>{item.benefits1}</li>
                  <li>{item.benefits2}</li>
                  <li>{item.benefits3}</li>
                  <li>{item.benefits4}</li>
                  {/* <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
                <li>They're linked to a lowest risk of diabetes</li> */}
                </ul>
              </div>
              <button className="buy--btn">ADD TO CART</button>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Recomnded;
