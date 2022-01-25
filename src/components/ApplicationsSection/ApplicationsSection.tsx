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
          {/* <h3>Hur vi utmärker oss</h3> */}
          <h2>Systemen vi levererar</h2>
          <div className="applications-section-list">
            <Card
              icon={SpeedIcon}
              imageClassName="speed-icon"
              header="Skalbara"
              text="Genom att tänka på skalbarhet redan från början möjliggör vi för att enkelt öka kapaciteten eller addera funktionalitet, oavsett hur era framtida behov ser ut."
            />
            <Card
              icon={UserFriendlyIcon}
              header="Användarvänliga"
              imageClassName="userfriendly-icon"
              text="Det spelar ingen roll hur kraftfullt ett system är om inte användaren förstår hur det ska användas. Vi utvecklar snygga, intuitiva gränssnitt som är enkla att lära sig."
            />
            <Card
              icon={SecureIcon}
              imageClassName="secure-icon"
              header="Säkra"
              text="Tack vare erfarenhet från projekt med mycket höga säkerhetskrav kan vi säkerställa att ingen obehörig får tillgång till er data."
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
