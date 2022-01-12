import React, { FunctionComponent, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./ContactForm.scss";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Button from "../Button/Button";

const ContactForm: FunctionComponent = () => {
  const [state, handleSubmit] = useForm("xzbozlqd");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isCompanyFocused, setIsCompanyFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  console.log({
    isNameFocused,
    isCompanyFocused,
    isEmailFocused,
    isMessageFocused,
  });

  if (state.succeeded) {
    return (
      <ContentContainer>
        <p>Tack för ditt meddelande! Vi hör av oss inom kort.</p>
      </ContentContainer>
    );
  }
  return (
    <ContentContainer className="contact-form-wrapper">
      <h2>Kontakta oss</h2>

      <p>
        Vi svarar gärna på dina frågor. Fyll i dina uppgifter så hör vi av oss
        inom ett par timmar.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <FlexContainer justifyContent="space-between">
          <label
            htmlFor="name"
            className={
              isNameFocused
                ? "required-focused contact-form-label-focused "
                : "required"
            }
          >
            Namn
          </label>
          <input
            id="name"
            type="name"
            name="name"
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
            autoFocus
          />
        </FlexContainer>

        <FlexContainer justifyContent="space-between">
          <label
            htmlFor="email"
            className={
              isEmailFocused
                ? "required-focused contact-form-label-focused"
                : "required"
            }
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </FlexContainer>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <FlexContainer justifyContent="space-between">
          <label
            htmlFor="company"
            className={
              isCompanyFocused
                ? "required-focused contact-form-label-focused"
                : "required"
            }
          >
            Företag
          </label>
          <input
            id="company"
            type="company"
            name="company"
            onFocus={() => setIsCompanyFocused(true)}
            onBlur={() => setIsCompanyFocused(false)}
          />
        </FlexContainer>

        <FlexContainer justifyContent="space-between">
          <label
            htmlFor="message"
            className={isMessageFocused ? "contact-form-label-focused" : ""}
          >
            Något annat?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Valfritt"
            onFocus={() => setIsMessageFocused(true)}
            onBlur={() => setIsMessageFocused(false)}
            rows={3}
          />
        </FlexContainer>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <FlexContainer justifyContent="flex-end" margin="0">
          <Button label="SKICKA" />
        </FlexContainer>
      </form>
    </ContentContainer>
  );
};

export default ContactForm;
