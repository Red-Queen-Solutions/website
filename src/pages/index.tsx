import React from "react";
import LandingSection from "src/components/LandingSection";
import { MainView } from "src/components/MainView";
import RedStripe from "src/components/RedStripe";
import "./index.scss";

export default function Home() {
  return (
    <MainView>
      <LandingSection />
      <RedStripe />
    </MainView>
  );
}
