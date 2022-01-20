import React from "react";
import Logo from "static/RedQueenIcon.svg";
import "./Header.scss";
import { navigate } from "gatsby";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { animated } from "react-spring";

export const Header = () => (
  <animated.div className="main-header">
    <img className="rq-logo" src={Logo} onClick={() => navigate("/")} />
    <NavigationMenu />
  </animated.div>
);
