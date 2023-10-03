import React from "react";
import "./Header.css";

function Home() {
  return (
    <div className="page">
      <div className="logo">
        <img
          className="logoImg"
          src="/images/logo-social.png"
          width="160px"
          height="100px"
        ></img>
        <div className="Title">
          <h1>PICTURIST</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
