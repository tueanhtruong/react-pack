import classNames from "classnames";
import React from "react";
import "./styles.scss";
import { ConnectorProps } from "./types";

const Connector: React.FC<ConnectorProps> = ({
  active,
  completed,
  orientation,
  position = "left",
  state = "",
}) => {
  // const ref = React.useRef<HTMLSpanElement>(null);
  // const [vars, setVars] = React.useState<{ [key: string]: string }>();
  // useLayoutEffect(() => {
  //   if (orientation === "horizontal") {
  //     const totalWidth = ref.current?.getBoundingClientRect()?.width;
  //     const numberOfDash = totalWidth ? Math.floor((totalWidth - 4) / 6) : 1;
  //     const dashWidth = totalWidth ? totalWidth / numberOfDash : 1;
  //     const percentage = (4 / dashWidth) * 100;
  //     setVars({
  //       "--bgSize": `${dashWidth}px 100%`,
  //       "--percent": `${percentage}%`,
  //     });
  //   }
  // }, []);
  return (
    <span
      // style={vars}
      // ref={ref}
      className={classNames("stepper__connector", orientation, {
        active: active,
        completed: completed,
        [position]: true,
        [state]: !!state,
      })}
    ></span>
  );
};

export default Connector;
