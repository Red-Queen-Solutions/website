import React from "react";
import Logo from "static/RedQueenIcon.svg";
import { navigate } from "gatsby";
import { animated } from "react-spring";
import { FlexContainer } from "src/components/FlexContainer/FlexContainer";
import { NavigationLinks } from "./NavigationLinks";
import { NavigationMenu } from "./NavigationMenu";
import "./Header.scss";
import { useWindowSize } from "src/hooks/useWindowSize";

export const Header = () => {
  const windowSize = useWindowSize();

  const isBigScreen = windowSize.width > 600;
  // const [isMenuVisible, setIsMenuVisible] = useState(true);
  // const [y, setY] = useState(window.scrollY);
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => handleNavigation(e));

  //   return () => {
  //     // return a cleanup function to unregister our function since its gonna run multiple times
  //     window.removeEventListener("scroll", (e) => handleNavigation(e));
  //   };
  // }, [y]);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY && !isMenuVisible) {
  //       setIsMenuVisible(true);
  //       console.log("scrolling up");
  //     } else if (y < window.scrollY && isMenuVisible) {
  //       setIsMenuVisible(false);

  //       console.log("scrolling down");
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y, isMenuVisible, setIsMenuVisible]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  // const transitions = useTransition(isMenuVisible, {
  //   from: {
  //     transform: "translateY(-200px)",
  //   },
  //   enter: {
  //     transform: "translateY(0)",
  //   },
  //   leave: {
  //     transform: "translateY(-200px)",
  //   },
  //   reverse: !isMenuVisible,
  //   // delay: 200,
  //   config: config.default,
  //   // onRest: () => setIsMenuVisible((prev) => !prev),
  // });

  // return transitions(
  //   (styles, item) =>
  //     item && (
  //       <animated.div className="main-header" style={styles}>
  //         <img className="rq-logo" src={Logo} onClick={() => navigate("/")} />
  //         <NavigationMenu />
  //       </animated.div>
  //     )
  // );
  return (
    <animated.div className="main-header">
      <img className="rq-logo" src={Logo} onClick={() => navigate("/")} />
      {isBigScreen ? (
        <FlexContainer className="navigation-links">
          <NavigationLinks />
        </FlexContainer>
      ) : (
        <NavigationMenu />
      )}
    </animated.div>
  );
};
