import { FloatingList } from "@floating-ui/react";
import classNames from "classnames";
import React, { PropsWithChildren, useRef } from "react";
import { View } from "../commons";
import { StepperProvider } from "./context";
import "./styles.scss";
import { StepperContextProps, StepperProps } from "./types";
import { useControlState } from "./useControlState";

const Wrapper: React.FC<PropsWithChildren<StepperProps>> = ({
  activeStep: activeStepProp,
  maxAvailableStep: maxAvailableStepProp,
  setActiveStep: setActiveStepProp,
  children,
  orientation = "horizontal",
}) => {
  const [activeStep, setActiveStep] = useControlState({
    value: activeStepProp,
    onChange: setActiveStepProp,
    defaultValue: 0,
  });

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const contextValue: StepperContextProps = {
    activeStep,
    orientation,
    maxAvailableStep: maxAvailableStepProp ?? activeStep + 1,
    onSelectStep: setActiveStep,
  };

  return (
    <View className={classNames("stepper__wrapper", orientation)}>
      <StepperProvider value={contextValue}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {children}
        </FloatingList>
      </StepperProvider>
    </View>
  );
};

export default Wrapper;
