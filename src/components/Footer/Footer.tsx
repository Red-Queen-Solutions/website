import React, { FunctionComponent } from "react";
import "./Footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <div className="footer">
      <div className="footer-background" />
      <div className="footer-content">
        <span className="footer-row">Org.nr: 559&zwj;205&zwj;-&zwj;6393</span>
        <span className="footer-row">
          Copyright © Red Queen Solutions AB 2022. Alla rättigheter förbehålls.
        </span>
      </div>
    </div>
  );
};

export default Footer;
