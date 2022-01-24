import { useMediaQuery } from "react-responsive";

export const useIsSmallScreen = () =>
  useMediaQuery({ query: "(max-width: 768px)" });
