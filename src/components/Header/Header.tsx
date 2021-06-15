import React from "react";
import Logo from "static/RedQueenIcon.svg";
import "./Header.scss";
import { navigate } from "gatsby";

export const Header = () => {
  return (
    <div className="main-header">
      <img className="rq-logo" src={Logo} onClick={() => navigate("/")} />
    </div>
  );
};
