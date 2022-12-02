import React from "react";
import HomePathCard from "../components/HomePathCard";
import Slider from "../components/Slider/Slider";
const PathPage = ({ img, directions, arrow }) => {
  return (
    <>
      <HomePathCard img={img} directions={directions} arrow={arrow} />
      <Slider />
    </>
  );
};

export default PathPage;
