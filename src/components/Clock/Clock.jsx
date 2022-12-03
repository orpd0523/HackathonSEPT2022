import React from "react";
import time from "../../assests/Time.png";
import "./Clock.scss";

const Clock = () => {
  return (
    <div className="clock">
      <img className="clock__display" src={time} alt="time" />
    </div>
  );
};

export default Clock;
