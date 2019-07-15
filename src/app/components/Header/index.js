import React from "react";

import Title from "../Title";

import myPhoto from "../../../images/myPhoto.jpg";
import bluestroke from "../../../images/brush-stroke-three.png";

import "./index.scss";

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        <img src={myPhoto} alt="This is how i look" />
      </div>
      <div className="Header--title">
        <Title level="1">Žygimantas Tveraga</Title>
        <Title
          level="3"
          colorClass="color-purple-light"
          weightClass="font-weight-400"
        >
          Bedarbis
        </Title>
      </div>
      <img
        src={bluestroke}
        alt="Paint brush stroke"
        className="Header--decoration"
      />
    </header>
  );
}

export default Header;
