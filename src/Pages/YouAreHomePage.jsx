import React from "react";
import Clock from "../components/Clock/Clock";
import Card from "../components/Card/Card";
import myHouse from "../assets/images/Image-My House.png"

const TakeMeHomePage = () => {
  return (
    <>
      <Clock />
        <Card
          src={myHouse}
          alt="home" audio={true} location={false}
        >
          <p className="typography typography--purple typography--h3 typography--center">YOUR ARE</p>
          <p className="typography typography--h3 typography--center">Home {":)"}
          </p>
        </Card>
        <Card>
          <p className="typography typography--purple typography--h3 typography--center">REMINDER</p>
          <p className="typography typography--h3 typography--center">You've done everything you need to do today. Time to relax.</p>
        </Card>
    </>
  );
};

export default TakeMeHomePage;