import React, { FunctionComponent, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ClipLoader from "react-spinners/ClipLoader";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./ContactForm.scss";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Button from "../Button/Button";
import { useSpring, animated } from "react-spring";
import SuccessScreen from "./SuccessScreen/SuccessScreen";

const ContactForm: FunctionComponent = () => {
  const [state, handleSubmit] = useForm("xzbozlqd");
  const emailRef = useRef("");

  // Fades out the red stripe on succesfull submit
  const styles = useSpring({
    opacity: state.succeeded ? 0 : 1,
    config: { tension: 100, friction: 26, mass: 1 },
  });

  return (
    <ContentContainer className="contact-form-wrapper">
      <animated.div className="red-stripe-clipped" style={styles} />

      {state.succeeded ? (
        <SuccessScreen email={emailRef.current} />
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-header">Kontakta oss</h2>
          <p className="contact-p">
            Vi svarar gärna på dina frågor. Fyll i dina uppgifter så hör vi av
            oss inom ett par timmar.
          </p>
          <FlexContainer justifyContent="space-between">
            <label htmlFor="name">Namn</label>
            <input id="name" type="name" name="name" required autoFocus />
          </FlexContainer>

          <FlexContainer justifyContent="space-between">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={(e) => (emailRef.current = e.target.value)}
            />
          </FlexContainer>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <FlexContainer justifyContent="space-between">
            <label htmlFor="company">Företag</label>
            <input id="company" type="company" name="company" required />
          </FlexContainer>

          <FlexContainer justifyContent="space-between">
            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" required rows={3} />
          </FlexContainer>

          <FlexContainer justifyContent="flex-end" margin="0">
            {state.submitting && (
              <ClipLoader color={"#1553b7"} loading={true} />
            )}

            <Button label="SKICKA" />
          </FlexContainer>
        </form>
      )}
    </ContentContainer>
  );
};

export default ContactForm;
