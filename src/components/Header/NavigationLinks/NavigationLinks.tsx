import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import "./NavigationLinks.scss";

export const NavigationLinks: FunctionComponent = () => {
  return (
    <>
      <Link
        to="/"
        className="navigation-links-item"
        activeClassName="navigation-links-item-active"
      >
        Hem
      </Link>
      <Link
        to="/kontakt"
        className="navigation-links-item"
        activeClassName="navigation-links-item-active"
      >
        Kontakt
      </Link>
    </>
  );
};
