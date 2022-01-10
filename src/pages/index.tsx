import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Skräddarsydda IT-system - Red Queen Solutions</title>
      </Helmet>
      <LandingSection />
      <QouteSection />
      <WhyTailorMadeSection />
      <ApplicationsSection />
      <Footer />
    </MainView>
  );
}
