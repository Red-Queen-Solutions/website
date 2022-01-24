import { useMediaQuery } from "./useMediaQuery";

export const useIsSmallScreen = () =>
  useMediaQuery({ query: "(max-width: 768px)" });
