import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { animated, config, useSpring } from "react-spring";
import ContentContainer from "src/components/ContentContainer/ContentContainer";
import CheckmarkCircle from "static/checkbox_circle.svg";
import "./SuccessScreen.scss";

interface SuccessScreenProps {
  email: string;
}

const SuccessScreen: FunctionComponent<SuccessScreenProps> = ({ email }) => {
  const checkmarkStyle = useSpring({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
    config: { ...config.wobbly, mass: 1.2 },
    delay: 200,
  });
  return (
    <ContentContainer className="success-screen">
      <animated.img
        src={CheckmarkCircle}
        height="50px"
        alt="success"
        style={checkmarkStyle}
        className="success-screen-checkmark"
      />
      <h2 className="success-screen-header">Tack!</h2>
      <p className="success-screen-p">{`Vi återkommer så snart som möjligt till ${email}`}</p>
      <Link to="/">Till startsidan</Link>
    </ContentContainer>
  );
};

export default SuccessScreen;
