import React from "react";
import Clock from "../components/Clock/Clock";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import TakeMeHomeCard from "../components/TakeMeHomeCard";
import "./TakeMeHomePage.scss";
import { Link } from "react-router-dom";

const TakeMeHomePage = () => {
  return (
    <div className="take-me-home-page">
      <Clock />
      <TakeMeHomeCard />
      <a href="#" className="take-me-home-page__emergency-link">
        Call Emergency Contact
      </a>
    </div>
  );
};

export default TakeMeHomePage;
