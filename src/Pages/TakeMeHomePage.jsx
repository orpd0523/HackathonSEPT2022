import React from "react";
import Clock from "../components/Clock/Clock";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

const TakeMeHomePage = () => {
  return (
    <>
      <Clock />
        <Card>
          <p className="typography typography--purple typography--h3 typography--center">YOU ARE:</p>
          <p className="typography typography--h3 typography--center">Walking home from the grocery store</p>
        </Card>
        <Card
          src="https://www.realestate.com.au/blog/images/800x450-fit,progressive,format=webp/2017/06/12121155/capi_5598f67b37628b0e689d4b88ded2e15f_de2ee4cbfc7de746762b45dd42c90879.jpeg"
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
