import React from "react";
import ContentContainer from "../../ContentContainer/ContentContainer";
import "./QouteSectionMobile.scss";

const QouteSectionMobile = () => {
  return (
    <ContentContainer
      id="qoute-section-container-root"
      className="qoute-container-mobile"
    >
      <div className="left-side">
        {/* <h3>Rubrik</h3> */}
        <h2>Vad vi gör</h2>
        <p>Vi kan bygga de flesta typer av system, till exempel:</p>
        <ul>
          <li>Webportaler för anställda eller kunder</li>
          <li>Logistiksystem</li>
          <li>Resursplaneringssystem</li>
          <li>Automatisering av manuella processer</li>
        </ul>
        <p>
          Vi gör det genom att bygga webappar, smartphoneappar och APIer. Vi
          integrerar mot era eventuella befintliga system och hjälper er även
          med hosting. Teknologier vi gillar att använda innefattar React, React
          Native, Node, .NET, SQL, MongoDB.
        </p>
      </div>
      {/* <div className="right-side">
          <div>
            <p>
              "Red Queen Solutions lorem ipsum dolor sit amet, coneget mollis
              neque blandit posuere. Nulla interdum placerat."
            </p>
            <p>- Company Inc</p>
          </div>
        </div> */}
    </ContentContainer>
  );
};

export default QouteSectionMobile;
