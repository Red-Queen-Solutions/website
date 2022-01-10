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
          <h3>Rubrik</h3>
          <h2>Huvudrubrik</h2>
          <div className="applications-section-list">
            <Card
              icon={SpeedIcon}
              imageClassName="speed-icon"
              header="Flexibla"
              text="Användarvänlighet betyder för oss att kombinera kraftfulla funktioner med ett enkelt och intiutivt gränssnitt. Målet är alltid att nya användare kan börja använda systemet utan att utbildas om dess funktionalitet."
            />
            <Card
              icon={UserFriendlyIcon}
              header="Användarvänliga"
              text="Användarvänlighet betyder för oss att kombinera kraftfulla funktioner med ett enkelt och intiutivt gränssnitt. Målet är alltid att nya användare kan börja använda systemet utan att utbildas om dess funktionalitet."
            />
            <Card
              icon={SecureIcon}
              header="Säkra"
              text="Användarvänlighet betyder för oss att kombinera kraftfulla funktioner med ett enkelt och intiutivt gränssnitt. Målet är alltid att nya användare kan börja använda systemet utan att utbildas om dess funktionalitet."
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
