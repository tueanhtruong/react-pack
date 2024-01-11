import { useListItem, useMergeRefs } from "@floating-ui/react";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { View } from "../commons";
import { useStepperContext } from "./context";
import "./styles.scss";
import { RenderIconProps, StepButtonProps } from "./types";

const StepperIcon: React.FC<PropsWithChildren<RenderIconProps>> = () => {
  return <FaRegDotCircle />;
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
  const isRightConnectorActive = index === activeStep - 1;
  const isLeftConnectorActive = isStepActive;
  const isLeftConnectorCompleted = isStepCompleted;
  const isRightConnectorCompleted = index < activeStep - 1;
  const isDisabledStep = index > maxAvailableStep;
  const mergeRef = useMergeRefs([buttonRef, listItemRef]);

  // useEffect(() => {
  //   if (isStepActive && buttonRef.current) {
  //     buttonRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       inline: "center",
  //     });
  //   }
  // }, [isStepActive]);

  return (
    <View
      ref={mergeRef}
      className={classNames("stepper__button", orientation, {
        active: isStepActive,
        completed: isStepCompleted,
        disabled: isDisabledStep,
      })}
      onClick={() => onSelectStep(index)}
    >
      <View className={classNames("stepper__icon__wrapper", orientation)}>
        <span
          className={classNames("stepper__connector", orientation, {
            active: isLeftConnectorActive,
            completed: isLeftConnectorCompleted,
          })}
        />
        <IconProp
          {...{
            state,
            active: isStepActive,
            available: !isDisabledStep,
            completed: isStepCompleted,
          }}
        />
        <span
          className={classNames("stepper__connector", orientation, {
            active: isRightConnectorActive,
            completed: isRightConnectorCompleted,
          })}
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
