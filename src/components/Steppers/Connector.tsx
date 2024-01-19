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
  return (
    <span
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
