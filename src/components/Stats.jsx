import React from "react";
import cookie from "./cookie.png";

import "./Stats.scss";

export default function Stats({ cookieCount, buildingState }) {
  return (
    <div className="stats-container">
      <div className="stats-container__cookie-container">
        <div className="stats">You have {cookieCount} cookies!!!</div>
        <img
          style={{ height: "20px", animation: "rotation 1s infinite linear" }}
          src={cookie}
          alt="Cookie"
        />
      </div>
      <div className="stats-container__building-container">
        You have {buildingState.buildings.length} bakeries!!!
      </div>
    </div>
  );
}
