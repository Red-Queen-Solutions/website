import React, { FunctionComponent } from "react";
import "./Footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <div className="footer">
      <span className="footer-row">Org.nr: 559205-6393</span>
      <span className="footer-row">
        Copyright © Red Queen Solutions AB 2022. Alla rättigheter förbehålls.
      </span>
    </div>
  );
};

export default Footer;
