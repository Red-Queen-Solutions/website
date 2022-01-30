import React from "react";
import Logo from "static/RedQueenIcon.svg";
import { navigate } from "gatsby";
import { FlexContainer } from "src/components/FlexContainer/FlexContainer";
import { NavigationLinks } from "./NavigationLinks";
import { NavigationMenu } from "./NavigationMenu";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="main-header">
      <img className="rq-logo" src={Logo} onClick={() => navigate("/")} />
      <NavigationMenu />
      <FlexContainer className="navigation-links">
        <NavigationLinks />
      </FlexContainer>
    </div>
  );
};
