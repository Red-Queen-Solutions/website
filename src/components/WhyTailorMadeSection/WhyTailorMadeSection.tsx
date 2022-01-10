import React from "react";
import { Reason } from "./Reason/Reason";
import "./WhyTailorMadeSection.scss";
import Image from "static/wtms.png";
import ContentContainer from "../ContentContainer/ContentContainer";

export const WhyTailorMadeSection = () => {
  return (
    <ContentContainer>
      <h3>Maximera din verksamhet</h3>
      <h2>Skräddarsytt system har många fördelar</h2>
      <div className="why-tailor-made-section">
        <div className="wtm-leftside">
          <p className="wtm-leftside-ingress">
            Att köpa ett skräddarsytt system har flera stora fördelar jämfört
            med en färdig standardlösning.
          </p>
          <Reason
            header="Ökad produktivitet"
            text="Lorem ipsum dolor sit amet, coneget mollis neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
          />
          <Reason
            header="Ni sparar pengar"
            text="Lorem ipsum mentum mauris neque, eget mollis neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
          />
          <Reason
            header="Skalbart och dynamiskt"
            text="Lorem ipsum dolor sit amet, consectetur adium mauris neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
          />
          <p className="wtm-leftside-ingress">Läs mer här.</p>
        </div>
        <div className="wtm-rightside">
          <img className="wtms-image" src={Image}></img>
        </div>
      </div>
    </ContentContainer>
  );
};
