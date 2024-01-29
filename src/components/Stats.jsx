import React from "react";
import cookie from "./cookie.png";

import "./Stats.scss";

export default function Stats({ cookieCount, buildingState }) {
  return (
    <div className="stats-container">
      <div className="stats-container__cookie-container">
        <div className="stats">
          You have <span className="cookie-count">{cookieCount}</span> cookies
          !!!
          <img
            style={{ height: "20px", animation: "rotation 1s infinite linear" }}
            src={cookie}
            alt="Cookie"
          />
        </div>
      </div>
      <div className="stats-container__cookie-container">
        <div className="stats">
          You have{" "}
          <span className="bakery-count">{buildingState.buildings.length}</span>{" "}
          bakeries !!!
          <img
            style={{ height: "20px", animation: "rotation 1s infinite linear" }}
            src={cookie}
            alt="Cookie"
          />
        </div>
      </div>
    </div>
  );
}
