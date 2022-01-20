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
      <ContentContainer>
        <div className="applications-section">
          <h3>Hur vi utmärker oss</h3>
          <h2>Professionell mjukvara</h2>
          <div className="applications-section-list">
            <Card
              icon={SpeedIcon}
              imageClassName="speed-icon"
              header="Skalbar"
              text="Genom att tänka på skalbarhet redan från början möjliggör vi för att enkelt öka kapaciteten eller addera funktionalitet oavsett hur era framtida behov ser ut."
            />
            <Card
              icon={UserFriendlyIcon}
              header="Användarvänlig"
              text="Intiutiva, välorganiserade gränssnitt låter användare lära sig använda applikationen så snabbt som möjligt."
            />
            <Card
              icon={SecureIcon}
              header="Säker"
              text="Tack vare erfarenhet från projekt med mycket höga säkerhetskrav kan vi säkerställa att era system kommer vara säkra."
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
