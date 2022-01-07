import React from "react";
import "./ApplicationsSection.scss";
import Card from "./Card";
import SecureIcon from "static/secure.png";
import SpeedIcon from "static/speed_icon.svg";
import UserFriendlyIcon from "static/userfriendly_icon.svg";
import ContentContainer from "../ContentContainer/ContentContainer";

export const ApplicationsSection = () => {
  return (
    <ContentContainer>
      <div className="applications-section">
        <h3>Våra system</h3>
        <h2>Toppmoderna applikationer för företag i framkant</h2>
        <div className="applications-section-list">
          <Card
            icon={SpeedIcon}
            header="Flexibla"
            text="[Vad det står suger, men essensen är rätt] Er verksamhet är i ständig förändring, och för att säkerställa att systemet ni köper passar er även i framtiden så ser vi till att bygga det för att det ska passa er verksamhet även i framtiden."
          />
          <Card
            icon={UserFriendlyIcon}
            header="Användarvänliga"
            text="Användarvänlighet betyder för oss att kombinera kraftfulla funktioner med ett enkelt och intiutivt gränssnitt. Målet är alltid att nya användare kan börja använda systemet utan att utbildas om dess funktionalitet."
          />
          <Card
            icon={SecureIcon}
            header="Säkra"
            text="sd da sd asd  asd asd as dasd as das daslkdj alskjlkas jlkajslkd jaklsdj lkasjdlkjaslkd jaslkjd klasjd lkasjd lkasjdlk jasldj aslkfds asdas dasdas asd as asdas dasd asdasdasdasdasdas das das d assa dasdasd."
          />
        </div>
      </div>
    </ContentContainer>
  );
};
