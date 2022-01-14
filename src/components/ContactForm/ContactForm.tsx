import React, { FunctionComponent, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ClipLoader from "react-spinners/ClipLoader";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./ContactForm.scss";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Button from "../Button/Button";
import { useSpring, animated } from "react-spring";
import SuccessScreen from "./SuccessScreen/SuccessScreen";
import { isFormValid } from "./ContactForm.functions";

const ContactForm: FunctionComponent = () => {
  const [state, handleSubmit] = useForm("xzbozlqd");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isCompanyFocused, setIsCompanyFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  // const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  // Fades out the red stripe on succesfull submit
  const styles = useSpring({
    opacity: state.succeeded ? 0 : 1,
    config: { tension: 100, friction: 26, mass: 1 },
  });

  return (
    <ContentContainer className="contact-form-wrapper">
      <animated.div className="red-stripe-clipped" style={styles} />

      {state.succeeded ? (
        <SuccessScreen email={email} />
      ) : (
        <>
          <h2 className="contact-header">Kontakta oss</h2>
          <p className="contact-p">
            Vi svarar gärna på dina frågor. Fyll i dina uppgifter så hör vi av
            oss inom ett par timmar.
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </FlexContainer>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* <FlexContainer justifyContent="space-between">
              <label
                htmlFor="phone"
                className={isCompanyFocused ? "contact-form-label-focused" : ""}
              >
                Telefon
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                onFocus={() => setIsPhoneFocused(true)}
                onBlur={() => setIsPhoneFocused(false)}
              />
            </FlexContainer> */}

            <FlexContainer justifyContent="space-between">
              <label
                htmlFor="company"
                className={isCompanyFocused ? "contact-form-label-focused" : ""}
              >
                Företag
              </label>
              <input
                id="company"
                type="company"
                name="company"
                placeholder="Valfritt"
                onFocus={() => setIsCompanyFocused(true)}
                onBlur={() => setIsCompanyFocused(false)}
              />
            </FlexContainer>

            <FlexContainer justifyContent="space-between">
              <label
                htmlFor="message"
                className={isMessageFocused ? "contact-form-label-focused" : ""}
              >
                Ev. meddelande
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
              {state.submitting && (
                <ClipLoader color={"#1553b7"} loading={true} />
              )}

              <Button disabled={!isFormValid(name, email)} label="SKICKA" />
            </FlexContainer>
          </form>
        </>
      )}
    </ContentContainer>
  );
};

export default ContactForm;
