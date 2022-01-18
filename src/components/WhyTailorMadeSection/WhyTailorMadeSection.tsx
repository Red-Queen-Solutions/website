import React from "react";
import { Reason } from "./Reason/Reason";
import "./WhyTailorMadeSection.scss";
import Image from "static/wtms.png";
import ContentContainer from "../ContentContainer/ContentContainer";

export const WhyTailorMadeSection = () => {
  return (
    <ContentContainer>
      <h3>Varför skräddarsytt</h3>
      <h2>Hur företag tjänar på egenutvecklade system</h2>
      <p className="wtm-leftside-ingress">
        Att köpa ett system som är specifikt utvecklat efter just er verksamhet
        kan ha flera stora fördelar, till exempel:
      </p>
      <div className="why-tailor-made-section">
        <div className="wtm-leftside">
          <Reason
            header="Framtaget specifikt för er"
            text="Varje organisation har sitt egna sätt att jobba på. Det är svårt för företag att anpassa sina processer efter en specifik mjukvara, oavsett hur effektiv eller kraftfull mjukvaran är. Det är därför mjukvara behöver vara designat och utvecklat på ett sätt så att den kan anpassas efter affärsmodellen och följa organisationens unika processer. Skräddarsydda IT-system hjälper till att optimera era processer snarare än att ersätta dem."
          />
          <Reason
            header="Skalbarhet"
            text="För att behålla och förbättra din konkurrenskraft över tid krävs det att du kan anpassa dig efter förändrade förutsättningar. Skräddarsydda system är enkla att förändra - nya processer och teknologier kan bli integrerade i er befintliga mjukvara när marknadstrender förändras, så att ni fortsätter vara relevanta."
          />
          <Reason
            header="Support"
            text="Skräddarsydda system kommer med pålitlig teknisk support från samma utvecklare som byggde din applikation från grunden. Vi är bekanta med din mjukvara och kan hantera alla typer av problem som kan uppstå."
          />
          {/* <p className="wtm-leftside-ingress">Läs mer här.</p> */}
        </div>
        <div className="wtm-rightside">
          <img className="wtms-image" src={Image}></img>
        </div>
      </div>
    </ContentContainer>
  );
};
