import { useMediaQuery } from "./useMediaQuery";

export const useIsBigScreen = () =>
  useMediaQuery({ query: "(min-width: 1260px)" });
