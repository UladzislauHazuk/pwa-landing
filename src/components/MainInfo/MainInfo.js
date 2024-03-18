import React from "react";
import InstallButton from "../InstallButton/InstallButton";
import "./MainInfo.css";
import NewSlots from "../NewSlots/NewSlots";

const MainInfo = () => {
  return (
    <div className="container">
      <div className="header-logo">
        <div className="logo"></div>
        <div className="logo-info">
          <h1>Best Slots</h1>
          <p>
            <span>Nine Dev</span>
            <span>Казино</span>
          </p>
          <div className="age"></div>
        </div>
        <div className="editor-btn">
          <div className="editor-choise"></div>
          <div className="btn">
            <InstallButton />
          </div>
        </div>
      </div>
      <div className="main-pictures">
        <div className="picture-1"></div>
        <div className="picture-2"></div>
        <div className="picture-3"></div>
        <div className="picture-4"></div>
      </div>
      <NewSlots></NewSlots>
      <div className="line"></div>
      <div className="reviews"></div>
    </div>
  );
};

export default MainInfo;
