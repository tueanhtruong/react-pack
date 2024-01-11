export type Step = {
  label: string;
  description?: string;
};

export type StepperProps = {
  //   steps: Step[];
  activeStep?: number;
  setActiveStep?: (step: number) => void;
  size?: "small" | "medium";
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  allowStepSelect?: boolean;
  maxAvailableStep?: number;
  state?: "error" | "success";
  renderIcon?: (props: RenderIconProps) => React.ReactNode;
};

export type StepButtonProps = {
  //   stepIndex?: number;
  // active?: boolean;
  // available?: boolean;
  // completed?: boolean;
  label: string;
  disabled?: boolean;
  onSelectStep?: (stepIndex: number) => void;
  state?: "error" | "success";
};

export type RenderIconProps = {
  // stepIndex: number;
  state?: "error" | "success";
  active?: boolean;
  available?: boolean;
  completed?: boolean;
};
export type StepperContextProps = {
  size?: "small" | "medium";
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  allowStepSelect?: boolean;
  maxAvailableStep: number;
  state?: "error" | "success";
  activeStep: number;
  onSelectStep: (stepIndex: number) => void;
  renderIcon?: (props: RenderIconProps) => React.ReactNode;
};
