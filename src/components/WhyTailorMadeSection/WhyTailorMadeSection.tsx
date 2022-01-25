import React from "react";
import { Reason } from "./Reason/Reason";
import "./WhyTailorMadeSection.scss";
import Image from "static/wtms.png";
import ContentContainer from "../ContentContainer/ContentContainer";

export const WhyTailorMadeSection = () => {
  return (
    <ContentContainer>
      <h2>Fördelar med skräddarsydda system</h2>
      <p className="wtm-leftside-ingress">
        Att köpa in ett system som är specifikt utvecklat efter just er
        verksamhet har flera fördelar, till exempel:
      </p>
      <div className="why-tailor-made-section">
        <div className="wtm-leftside">
          <Reason
            header="Ökad produktivitet"
            text="Genom att fokusera på nödvändiga funktioner så säkerställer man att systemet är anpassat efter hur era anställda jobbar. Med ett intuitivt användargränssnitt och förenklad datainmatning slipper man förvirring och gissande. Genom att strömlinjeforma och automatisera kan tiden det tar att genomföra en komplex arbetsuppgift minskas ordentligt."
          />
          <Reason
            header="Flexibilitet"
            text="För att behålla och förbättra konkurrenskraften över tid krävs det att man kan anpassa sig efter förändrade förutsättningar. Skräddarsydda system är enkla att förändra - nya processer och teknologier kan bli integrerade i er befintliga mjukvara när marknadstrender förändras, så att ni fortsätter ligga i framkant."
          />
          <Reason
            header="Konkurrensfördel"
            text="Med ett system unikt framtaget för ert företag får ni en konkurrensfördel eftersom ni är de enda som kan dra nytta av systemet. Ni kan enkelt särskilja er från era konkurrenter genom att ha en unik och bättre produkt helt dedikerad till er verksamhet. "
          />
        </div>
        <div className="wtm-rightside">
          <img className="wtms-image" src={Image}></img>
        </div>
      </div>
    </ContentContainer>
  );
};
