import { useListItem, useMergeRefs } from "@floating-ui/react";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { View } from "../commons";
import Connector from "./Connector";
import { useStepperContext } from "./context";
import "./styles.scss";
import { RenderIconProps, StepButtonProps } from "./types";

const StepperIcon: React.FC<PropsWithChildren<RenderIconProps>> = () => {
  return <FaRegDotCircle size={"1.25rem"} />;
};

const StepButton: React.FC<PropsWithChildren<StepButtonProps>> = ({
  label,
  children,
}) => {
  const {
    orientation,
    renderIcon: IconProp = StepperIcon,
    activeStep,
    maxAvailableStep,
    onSelectStep,
    state,
  } = useStepperContext();
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const { ref: listItemRef, index } = useListItem({ label });
  const isStepActive = index === activeStep;
  const isStepCompleted = index < activeStep;
  const isRightConnectorActive = isStepActive;
  const isLeftConnectorActive = isStepActive;
  const isLeftConnectorCompleted = isStepCompleted;
  const isRightConnectorCompleted = isStepCompleted;
  const isDisabledStep = index > maxAvailableStep;
  const mergeRef = useMergeRefs([buttonRef, listItemRef]);

  return (
    <View
      ref={mergeRef}
      className={classNames("stepper__button", orientation, {
        active: isStepActive,
        completed: isStepCompleted,
        disabled: isDisabledStep,
      })}
      onClick={() => onSelectStep(index)}
      flexGrow={1}
    >
      <View className={classNames("stepper__icon__wrapper", orientation)}>
        <Connector
          position="left"
          active={isLeftConnectorActive}
          completed={isLeftConnectorCompleted}
          orientation={orientation}
        />
        <IconProp
          {...{
            state,
            active: isStepActive,
            available: !isDisabledStep,
            completed: isStepCompleted,
          }}
        />
        <Connector
          position="right"
          active={isRightConnectorActive}
          completed={isRightConnectorCompleted}
          orientation={orientation}
        />
      </View>
      <View className={classNames("stepper__label__wrapper", orientation)}>
        <p>{label}</p>
        {children}
      </View>
    </View>
  );
};

export default StepButton;
