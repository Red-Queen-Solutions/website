import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import RedStripe from "../RedStripe";
import "./QouteSection.scss";

export const QouteSection = () => {
  return (
    <ContentContainer>
      <div
        id="qoute-section-container-root"
        className="qoute-section-container"
      >
        <RedStripe />
        <div className="left-side">
          <h3>Rubrik</h3>
          <h2>Huvudrubrik</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="right-side">
          <div>
            <p>
              "Red Queen Solutions lorem ipsum dolor sit amet, coneget mollis
              neque blandit posuere. Nulla interdum placerat."
            </p>
            <p>- Company Inc</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
