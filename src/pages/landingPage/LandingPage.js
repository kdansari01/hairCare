import React from "react";
import Sliders from "./slider";
import Categories from "./Categories";
import "../../App.css";
import TestomonialCard from "../../components/tesimonialCard.js/TestomonialCard";
import Footer from "../../components/Footer";
import Recomnded from "./Recomnded";
const LandingPage = () => {
  return (
    <div className="landingPage mt-4">
      <div>
        <Sliders />
      </div>
      <div className="mt-2 mb-4">
        <Categories />
      </div>
      <div className="mt-5">
        <TestomonialCard />
      </div>
      <div className="mt-5">
        <div>
          <h2 className="text-center">Recomnded For You</h2>
        </div>
        <Recomnded />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
