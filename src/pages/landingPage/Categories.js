import React from "react";
import women from "../../assests/images/women.png";
import men from "../../assests/images/men.png";
import Skincare from "../../assests/images/care.png";
import { NavLink } from "react-router-dom";
import "../../App.css";
const Categories = () => {
  const categoriesTypes = [
    {
      path: "/category/women-hair",
      name: "Women's Hair",
      logo: women,
    },
    {
      path: "/category/men-hair",
      name: "Men's Hair",
      logo: men,
    },
    {
      path: "/category/skin-care",
      name: "Skin Care",
      logo: Skincare,
    },
  ];
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center">Categories</h1>
      <div className="d-flex justify-content-center justify-content-evenly mt-5 ">
        {categoriesTypes.map((catgry) => (
          <NavLink to={catgry.path} className=" nav-link align-items-center ">
            <div className="catgryImgMain d-flex">
              <img src={catgry.logo} alt="logo" className="catgryImg" />
            </div>
            <div className="mt-3">
              <h5 className="catgryTitle">{catgry.name}</h5>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Categories;
