import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { FlexContainer } from "src/components/FlexContainer/FlexContainer";
import "./NavigationMenu.scss";

const NavigationMenu: FunctionComponent = () => {
  return (
    <FlexContainer className="navigation-menu">
      <Link
        to="/"
        className="navigation-menu-item"
        activeClassName="navigation-menu-item-active"
      >
        Hem
      </Link>
      <Link
        to="/kontakt"
        className="navigation-menu-item"
        activeClassName="navigation-menu-item-active"
      >
        Kontakt
      </Link>
    </FlexContainer>
  );
};

export default NavigationMenu;
