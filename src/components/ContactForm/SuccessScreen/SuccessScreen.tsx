import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { animated, config, useSpring } from "react-spring";
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
    <>
      <animated.img
        src={CheckmarkCircle}
        height="50px"
        alt="success"
        style={checkmarkStyle}
        className="success-screen-checkmark"
      />
      <h2 className="success-screen-header">Tack!</h2>
      <p className="success-screen-p">{`Vi återkommer så snart som möjligt till ${email}`}</p>
      <Link to={"/"}>Till startsidan</Link>
    </>
  );
};

export default SuccessScreen;
