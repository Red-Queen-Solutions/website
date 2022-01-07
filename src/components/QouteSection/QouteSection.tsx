import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import RedStripe from "../RedStripe";
import "./QouteSection.scss";

export const QouteSection = () => {
  return (
    <ContentContainer>
      <div className="qoute-section-container">
        <RedStripe />
        <div className="left-side">
          <h2>Mer detaljer om oss</h2>
          <p>
            Vi har kapacitet att leverera ert system på så lite som 4-6 veckor,
            med hjälp av modern teknologi We are able to deliver your digital
            product in as little as 4-6 weeks employing the lean startup
            approach and agile software development. We are also experts at
            scaling existing apps, helping clients to shift from inefficient
            solutions to stable products that really grow alongside their user
            base. agile software development. We are also experts at scaling
            existing apps, helping clients to shift from inefficient solutions
            to stable products that really grow alongside their user base.
          </p>
        </div>
        <div className="right-side">
          <div>
            <p>
              "Red Queen Solutions gjorde ett fantastiskt jobb. Tack vare dem
              jobbar vi nu mycket mer effektivt. Deckmaster är den bästa
              applikation som någonsin byggts!"
            </p>
            <p>- Kockumation</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
