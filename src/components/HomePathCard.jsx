import React from "react";
import "./HomePathCard.scss";

const HomePathCard = ({ img, directions, arrow }) => {
  const Arrow = arrow || "span";
  return (
    <div className="home-path-card">
      <div className="home-path-card__image-container">
        <img src={img} alt="Home" className="home-path-card__image" />
      </div>

      <div className="home-path-card__up-arrow">
        <Arrow size={"3rem"} />
      </div>

      <h3 className="home-path-card__directions-text">{directions}</h3>
      <h4 className="home-path-card__final-goal">to go home</h4>

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="home-path-card__view-map-link">
        View Map
      </a>
    </div>
  );
};

export default HomePathCard;
