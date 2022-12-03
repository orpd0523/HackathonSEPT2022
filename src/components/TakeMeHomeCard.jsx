import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assests/Image-My House.png";
import "./TakeMeHomeCard.scss";

const TakeMeHomeCard = () => {
  return (
    <div className="take-me-home-card">
      <div className="take-me-home-card__image-container">
        <img src={homeImage} alt="Home" className="take-me-home-card__image" />
      </div>
      <Link to={"path"} className="take-me-home-card__btn">
        Take me home
      </Link>
    </div>
  );
};

export default TakeMeHomeCard;
