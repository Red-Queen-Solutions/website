import { useMediaQuery } from "react-responsive";

export const useIsBigScreen = () =>
  useMediaQuery({ query: "(min-width: 1260px)" });
