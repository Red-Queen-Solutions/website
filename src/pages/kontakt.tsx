import React from "react";
import ContactForm from "src/components/ContactForm/ContactForm";
import { MainView } from "src/components/MainView";

export default function Home() {
  return (
    <MainView title={"Kontakta oss"}>
      <ContactForm />
    </MainView>
  );
}
