import React from "react";
import homeImage from "../assests/Image-My House.png";
import "./TakeMeHomeCard.scss";

const TakeMeHomeCard = () => {
  return (
    <div className="take-me-home-card">
      <div className="take-me-home-card__image-container">
        <img src={homeImage} alt="Home" className="take-me-home-card__image" />
      </div>
      <button className="take-me-home-card__btn">Take me home</button>
    </div>
  );
};

export default TakeMeHomeCard;
