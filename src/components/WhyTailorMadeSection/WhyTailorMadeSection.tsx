import React from "react";
import { Reason } from "./Reason/Reason";
import "./WhyTailorMadeSection.scss";
import Image from "static/wtms.png";

export const WhyTailorMadeSection = () => {
  return (
    <div className="why-tailor-made-section">
      <div className="wtm-leftside">
        <h3>Maximera din verksamhet</h3>
        <h2>Skräddarsytt system har många fördelar</h2>
        <p>
          Att köpa ett skräddarsytt system har flera stora fördelar jämfört med
          en färdig standardlösning.
        </p>
        <Reason
          header="Ökad produktivitet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum mauris neque, eget mollis neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
        />
        <Reason
          header="Ni sparar pengar"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum mauris neque, eget mollis neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
        />
        <Reason
          header="Skalbart och dynamiskt"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum mauris neque, eget mollis neque blandit posuere. Nulla interdum placerat nulla sed porttitor."
        />
      </div>
      <div className="wtm-rightside">
        <img className="wtms-image" src={Image}></img>
      </div>
    </div>
  );
};
