import React from "react";
import { useWindowSize } from "src/hooks/useWindowSize";
import ContentContainer from "../ContentContainer/ContentContainer";
import RedStripe from "../RedStripe";
import "./QouteSection.scss";
import QouteSectionMobile from "./QouteSectionMobile/QouteSectionMobile";

export const QouteSection = () => {
  const windowSize = useWindowSize();
  if (windowSize.width < 768) {
    return <QouteSectionMobile />;
  }

  return (
    <ContentContainer>
      <div
        id="qoute-section-container-root"
        className="qoute-section-container"
      >
        <RedStripe />
        <div className="left-side">
          {/* <h3>Rubrik</h3> */}
          <h2>Vad vi gör </h2>
          <p>Vi kan bygga de flesta typer av system, till exempel:</p>
          <ul>
            <li>Webportaler för anställda eller kunder</li>
            <li>Logistiksystem</li>
            <li>Resursplaneringssystem</li>
            <li>Automatisering av manuella processer</li>
          </ul>
          <p>
            De kan bestå av både webappar, smartphoneappar och APIer. Vi
            integrerar mot era eventuella befintliga system och hjälper er även
            med hosting. Vi använder moderna språk och ramverk som till exempel
            React, React Native, Node, .NET, SQL och Google Cloud Platform.
          </p>
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
