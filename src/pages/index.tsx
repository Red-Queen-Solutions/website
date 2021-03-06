import React from "react";
import ApplicationsSection from "src/components/ApplicationsSection";
import Footer from "src/components/Footer/Footer";
import LandingSection from "src/components/LandingSection";
import { MainView } from "src/components/MainView";
import QouteSection from "src/components/QouteSection";
import WhyTailorMadeSection from "src/components/WhyTailorMadeSection";

export default function Home() {
  return (
    <MainView title="Skräddarsydda IT-system">
      <LandingSection />
      <QouteSection />
      <WhyTailorMadeSection />
      <ApplicationsSection />
      <Footer />
    </MainView>
  );
}
