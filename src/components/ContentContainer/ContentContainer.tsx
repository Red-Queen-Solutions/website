import React, { FunctionComponent } from "react";
import "./ContentContainer.scss";
interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children,
  className = "",
}) => (
  <div className={`content-container${!className ? "" : ` ${className}`}`}>
    {children}
  </div>
);

export default ContentContainer;
