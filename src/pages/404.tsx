import React from "react";
import { MainView } from "src/components/MainView";

export default function NotFound() {
  return (
    <MainView title={"Page not found"}>
      <h1>Page not found</h1>
      <div>
        Oops! The page you are looking for has been removed or relocated
      </div>
    </MainView>
  );
}
