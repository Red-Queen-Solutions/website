import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import RedStripe from "../RedStripe";
import "./QouteSection.scss";

export const QouteSection = () => {
  return (
    <ContentContainer>
      <div
        id="qoute-section-container-root"
        className="qoute-section-container"
      >
        <RedStripe />
        <div className="left-side">
          {/* <h3>Rubrik</h3> */}
          <h2>Huvudrubrik</h2>
          <p>Vi kan bygga de flesta typer av system, till exempel:</p>
          <ul>
            <li>Webportaler för anställda eller kunder</li>
            <li>Logistiksystem</li>
            <li>Resursplaneringssystem</li>
            <li>Automatisering av manuella processer</li>
          </ul>
        </div>
        <div className="right-side">
          <div>
            <p>
              "Red Queen Solutions lorem ipsum dolor sit amet, coneget mollis
              neque blandit posuere. Nulla interdum placerat."
            </p>
            <p>- Company Inc</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
