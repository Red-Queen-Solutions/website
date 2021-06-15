import React from "react";
import Logo from "static/RedQueenIcon.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="main-header">
      <img src={Logo} />
    </div>
  );
};
