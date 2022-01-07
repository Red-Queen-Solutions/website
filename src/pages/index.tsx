import React from "react";
import ApplicationsSection from "src/components/ApplicationsSection";
import Footer from "src/components/Footer/Footer";
import LandingSection from "src/components/LandingSection";
import { MainView } from "src/components/MainView";
import QouteSection from "src/components/QouteSection";
import RedStripe from "src/components/RedStripe";
import WhyTailorMadeSection from "src/components/WhyTailorMadeSection";
import "./index.scss";

export default function Home() {
  return (
    <MainView>
      <LandingSection />
      <RedStripe />
      <QouteSection />
      <ApplicationsSection />
      <WhyTailorMadeSection />
      <Footer />
    </MainView>
  );
}
