// import { config, useSpring } from "@react-spring/core";
// import { animated } from "@react-spring/web";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { FlexContainer } from "src/components/FlexContainer/FlexContainer";
import "./NavigationMenu.scss";

const NavigationMenu: FunctionComponent = () => {
  //   const [hoveredItem, setHoveredItem] = useState("");
  //   const underlineStyle = useSpring({
  //     from: {
  //       transform: "scale(0)",
  //     },
  //     to: {
  //       transform: "scale(1)",
  //     },
  //     config: { ...config.wobbly },
  //   });

  return (
    <FlexContainer className="navigation-menu">
      <Link to="/" className="navigation-menu-item">
        Hem
      </Link>
      <Link to="/kontakt" className="navigation-menu-item">
        Kontakt
      </Link>
      {/* <FlexContainer flexDirection="column" alignItems="center">
        <Link
          to="/"
          className="navigation-menu-item"
          onMouseEnter={() => setHoveredItem("Hem")}
          onMouseLeave={() => setHoveredItem("")}
        >
          Hem
        </Link>
        {hoveredItem === "Hem" && (
          <animated.div
            className="navigation-menu-item-underline"
            style={underlineStyle}
          ></animated.div>
        )}
      </FlexContainer>
      <FlexContainer
        className="capsdj"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          to="/kontakt"
          className="navigation-menu-item"
          onMouseEnter={() => setHoveredItem("Kontakt")}
          onMouseLeave={() => setHoveredItem("")}
        >
          Kontakt
        </Link>
        {hoveredItem === "Kontakt" && (
          <animated.div
            className="navigation-menu-item-underline"
            style={underlineStyle}
          ></animated.div>
        )}
      </FlexContainer> */}
    </FlexContainer>
  );
};

export default NavigationMenu;
