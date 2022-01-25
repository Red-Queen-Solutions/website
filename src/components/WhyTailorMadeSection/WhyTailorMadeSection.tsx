import React from "react";
import { Reason } from "./Reason/Reason";
import "./WhyTailorMadeSection.scss";
import Image from "static/wtms.png";
import ContentContainer from "../ContentContainer/ContentContainer";

export const WhyTailorMadeSection = () => {
  return (
    <ContentContainer>
      {/* <h3>Varför skräddarsytt?</h3> */}
      <h2>Hur företag tjänar på egenutvecklade system</h2>
      <p className="wtm-leftside-ingress">
        Att köpa in ett system som är specifikt utvecklat efter just er
        verksamhet har flera fördelar, till exempel:
      </p>
      <div className="why-tailor-made-section">
        <div className="wtm-leftside">
          <Reason
            header="Byggt för er"
            text="Varje organisation har sina unika processer, och att anpassa dessa processer efter standardlösningar är ofta svårt. Bra mjukvara är designad och utvecklad på ett sätt så att den kan anpassas efter er affärsmodell och verksamhet. Skräddarsydda IT-system hjälper helt enkelt till att optimera och utveckla era processer snarare än att ersätta dem."
          />
          <Reason
            header="Flexibilitet"
            text="För att behålla och förbättra konkurrenskraften över tid krävs det att man kan anpassa sig efter förändrade förutsättningar. Skräddarsydda system är enkla att förändra - nya processer och teknologier kan bli integrerade i er befintliga mjukvara när marknadstrender förändras, så att ni fortsätter ligga i framkant."
          />
          <Reason
            header="Support"
            text="Skräddarsydda system kommer med pålitlig teknisk support från samma utvecklare som byggde applikationen från grunden. Vi dokumenterar och är vana vid mjukvaran, för att snabbt och smidigt kunna hantera alla typer av situationer som kan uppstå."
          />
        </div>
        <div className="wtm-rightside">
          <img className="wtms-image" src={Image}></img>
        </div>
      </div>
    </ContentContainer>
  );
};
