import React from "react";
import Clock from "../components/Clock/Clock";
import Card from "../components/Card/Card";

const TakeMeHomePage = () => {
  return (
    <>
      <Clock />
        <Card
          src="https://www.realestate.com.au/blog/images/800x450-fit,progressive,format=webp/2017/06/12121155/capi_5598f67b37628b0e689d4b88ded2e15f_de2ee4cbfc7de746762b45dd42c90879.jpeg"
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