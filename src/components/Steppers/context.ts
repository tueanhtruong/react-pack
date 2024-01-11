import { createContext, useContext } from "react";
import { StepperContextProps } from "./types";

const StepperContext = createContext<StepperContextProps>(
  {} as StepperContextProps
);

export const StepperProvider = StepperContext.Provider;

export function useStepperContext() {
  return useContext(StepperContext);
}
