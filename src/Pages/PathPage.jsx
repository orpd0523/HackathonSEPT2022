import React, { useState } from "react";
import HomePathCard from "../components/HomePathCard";
import Slider from "../components/Slider/Slider";
import image1 from "../assests/Screen Shot 2022-12-01 at 8.34.png";
import image2 from "../assests/Screen Shot 2022-12-01 at 8.34.png";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

const PathPage = () => {
  const [index, setIndex] = useState(0);
  const timerId = useRef(null);
  const directionsData = [
    {
      img: image1,
      directions: "Walk stright ahead",
      arrow: FaArrowUp,
    },
    {
      img: image2,
      directions: "Turn right",
      arrow: FaArrowRight,
    },
    {
      img: image1,
      directions: "Turn left",
      arrow: FaArrowLeft,
    },
    {
      img: image2,
      directions: "Go back",
      arrow: FaArrowDown,
    },
    {
      img: image1,
      directions: "Take a right turn",
      arrow: RiArrowGoForwardFill,
    },
    {
      img: image2,
      directions: "Take a left turn",
      arrow: RiArrowGoBackFill,
    },
    {
      img: null,
      directions: "You have arrived!",
      arrow: null,
    },
  ];

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (index < directionsData.length - 1) {
        setIndex((pre) => pre + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId.current);
      console.log("Cleared");
    };
  }, []);

  useEffect(() => {
    if (index > directionsData.length - 2) {
      clearInterval(timerId.current);
    }
  }, [index]);

  return (
    <>
      <HomePathCard {...directionsData[index]} />
      <Slider />
    </>
  );
};

export default PathPage;
