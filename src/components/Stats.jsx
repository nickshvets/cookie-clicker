import React from "react";
import "./Stats.scss";

export default function Stats({ cookieCount, buildingState }) {
  return <div className="stats">{cookieCount}</div>;
}
