import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "src/components/ContactForm/ContactForm";
import { MainView } from "src/components/MainView";
import "./index.scss";

export default function Home() {
  return (
    <MainView>
      <Helmet>
        <title>Kontakta oss - Red Queen Solutions</title>
      </Helmet>
      <ContactForm />
    </MainView>
  );
}
