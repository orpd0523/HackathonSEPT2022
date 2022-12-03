import React from "react";
import "./HomePathCard.scss";

const HomePathCard = ({ img, directions, arrow }) => {
  const Arrow = arrow || "span";
  return (
    <div className="home-path-card">
      {img && (
        <div className="home-path-card__image-container">
          <img src={img} alt="Home" className="home-path-card__image" />
        </div>
      )}

      {arrow && (
        <div className="home-path-card__up-arrow">
          <Arrow size={"3rem"} />
        </div>
      )}

      {img ? (
        <h3 className="home-path-card__directions-text">{directions}</h3>
      ) : (
        <h3 className="home-path-card__directions-text centered">
          {directions}
        </h3>
      )}
      {img && <h4 className="home-path-card__final-goal">to go home</h4>}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {img && (
        <a href="#" className="home-path-card__view-map-link">
          View Map
        </a>
      )}
    </div>
  );
};

export default HomePathCard;
