import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";
import "./LandingSection.scss";
import ContentContainer from "../ContentContainer/ContentContainer";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import ButtonLink from "../ButtonLink/ButtonLink";
// For smooth scroll to work in Safari

export const LandingSection = () => {
  return (
    <ContentContainer className="landing-section-wrapper">
      <h1 className="landing-section-header">Skräddarsydda IT-system</h1>
      <div className="landing-section">
        <div className="left-side">
          <p>
            Red Queen Solutions bygger applikationer åt företag som inte nöjer
            sig med standardlösningar. Oavsett om ni vill ersätta ett befintligt
            system eller skapa ett helt nytt så tar vi fram en lösning perfekt
            anpassad efter er verksamhet. <br></br>Med lång erfarenhet och
            modern medodik jobbar vi snabbt och flexibelt för att säkerställa
            att ert företags behov uppfylls både nu och i framtiden.
          </p>
          <FlexContainer justifyContent="flex-end">
            <button
              className="button-link-inverted"
              onClick={() => scrollTo("#qoute-section-container-root")}
            >
              Läs mer
            </button>
            <ButtonLink to="/kontakt" text="Boka ett möte" />
          </FlexContainer>
        </div>
        <div className="right-side">
          <StaticImage
            className="landing-screen-image"
            src="LandingScreenImage.png"
            alt="hero"
            placeholder="blurred"
          />
        </div>
      </div>
    </ContentContainer>
  );
};
