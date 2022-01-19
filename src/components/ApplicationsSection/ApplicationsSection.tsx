import React from "react";
import "./ApplicationsSection.scss";
import Card from "./Card";
import SecureIcon from "static/secure.svg";
import SpeedIcon from "static/speed_icon.svg";
import UserFriendlyIcon from "static/userfriendly_icon.svg";
import ContentContainer from "../ContentContainer/ContentContainer";

export const ApplicationsSection = () => {
  return (
    <div className="applications-section-wrapper">
      <div className="applications-section-background" />
      <ContentContainer>
        <div className="applications-section">
          <h3>Rubrik</h3>
          <h2>Huvudrubrik</h2>
          <div className="applications-section-list">
            <Card
              icon={SpeedIcon}
              imageClassName="speed-icon"
              header="Skalbara"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru."
            />
            <Card
              icon={UserFriendlyIcon}
              header="Användarvänliga"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru."
            />
            <Card
              icon={SecureIcon}
              header="Säkra"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru."
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
