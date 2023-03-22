import React from "react";
import Sliders from "./slider";
import Categories from "./Categories";
import "../../App.css";
const LandingPage = () => {
  return (
    <div className="landingPage mt-4">
      <div>
        <Sliders />
      </div>
      <div className="mt-2">
        <Categories />
      </div>
    </div>
  );
};

export default LandingPage;
