import React from "react";
import ApplicationsSection from "src/components/ApplicationsSection";
import Footer from "src/components/Footer/Footer";
import LandingSection from "src/components/LandingSection";
import { MainView } from "src/components/MainView";
import QouteSection from "src/components/QouteSection";
import WhyTailorMadeSection from "src/components/WhyTailorMadeSection";
import "./index.scss";

export default function Home() {
  return (
    <MainView>
      <LandingSection />
      <QouteSection />
      <WhyTailorMadeSection />
      <ApplicationsSection />
      <Footer />
    </MainView>
  );
}
