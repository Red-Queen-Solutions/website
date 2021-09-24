import React from "react";
import { MainView } from "src/components/MainView";
import LandingScreenImage from "static/LandingScreenImage.png";
import "./index.scss";

export default function Home() {
  return (
    <MainView>
      <div className="landing-section">
        <div className="left-side">
          <h1>Skräddarsydda IT-system</h1>
          <div>
            Red Queen Solutions bygger interna applikationer åt företag som inte
            nöjer sig med standardlösningar. Oavsett om du vill ersätta ett
            befintligt system eller skapa ett helt nytt så bygger vi en lösning
            som är perfekt för din verksamhet.
          </div>
        </div>
        <div className="right-side">
          <img className="landing-screen-image" src={LandingScreenImage}></img>
        </div>
      </div>
      <div className="red-stripe" />
    </MainView>
  );
}
