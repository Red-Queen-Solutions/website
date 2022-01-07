import React, { FunctionComponent } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./Footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <ContentContainer>
      <div className="footer">
        <span className="footer-row">Org.nr: 559205-6393</span>
        <span className="footer-row">
          Copyright © Red Queen Solutions 2021. Alla rättigheter förbehålls.
        </span>
      </div>
    </ContentContainer>
  );
};

export default Footer;
