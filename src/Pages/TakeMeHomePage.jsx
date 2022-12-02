import React from "react";
import Clock from "../components/Clock/Clock";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import myHouse from "../assets/images/Image-My House.png"

const TakeMeHomePage = () => {
  return (
    <>
      <Clock />
        <Card>
          <p className="typography typography--purple typography--h3 typography--center">YOU ARE:</p>
          <p className="typography typography--h3 typography--center">Walking home from the grocery store</p>
        </Card>
        <Card
          src={myHouse}
          alt="home"
        >
          <p className="typography typography--purple typography--h3 typography--center">YOUR ADDRESS IS</p>
          <p className="typography typography--h3 typography--center">234 w 17 ave</p>
          <Button>Take me home</Button>
        </Card>
    </>
  );
};

export default TakeMeHomePage;
