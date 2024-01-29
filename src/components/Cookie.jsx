import React, { useState, useEffect } from "react";
import cookie from "./cookie2.png";
import "./Cookie.scss";

const Cookie = ({ handleClick }) => {
  const [premiumCookie, setPremiumCookie] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.9) {
        setPremiumCookie(false);
      } else {
        setPremiumCookie(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      className="cookie"
      style={{
        border: premiumCookie ? "10px solid gold" : "10px solid #681b00",
      }}
      src={cookie}
      alt="Cookie"
      onClick={() => handleClick(premiumCookie)}
    />
  );
};

export default Cookie;
