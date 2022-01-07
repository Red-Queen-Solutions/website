import React, { FunctionComponent } from "react";
import "./ContentContainer.scss";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children,
}) => <div className="content-container">{children}</div>;

export default ContentContainer;
