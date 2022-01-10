import React from "react";
import "./LandingSection.scss";
import LandingScreenImage from "static/LandingScreenImage.png";
import ContentContainer from "../ContentContainer/ContentContainer";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import ButtonLink from "../ButtonLink/ButtonLink";

export const LandingSection = () => {
  return (
    <ContentContainer className="landing-section-wrapper">
      <h1 className="landing-section-header">Skräddarsydda IT-system</h1>
      <div className="landing-section">
        <div className="left-side">
          <p>
            Red Queen Solutions bygger interna applikationer åt företag som inte
            nöjer sig med standardlösningar. Oavsett om du vill ersätta ett
            befintligt system eller skapa ett helt nytt så tar vi fram en
            lösning perfekt anpassad efter din verksamhet. Genom erfarenhet och
            modern teknologi jobbar vi snabbt och flexibelt för att säkerställa
            att ert företags behov uppfylls både nu och i framtiden.
          </p>
          <FlexContainer justifyContent="flex-end">
            <ButtonLink to="/contact" text="Kontakta oss" />
          </FlexContainer>
        </div>
        <div className="right-side">
          <img className="landing-screen-image" src={LandingScreenImage}></img>
        </div>
      </div>
    </ContentContainer>
  );
};
