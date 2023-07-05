import React from "react";
import cn from "classnames";

import "./styles.scss";
import { Grid, View } from "..";

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  Number.isNaN(value) ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value === "") ||
  (Array.isArray(value) && value.length === 0);

const ViewItem: React.FC<Props> = ({ label, value, variant = "is-half" }) => {
  const isEmptyLine = isEmpty(label) && isEmpty(value);

  if (isEmptyLine)
    return (
      <Grid.Item
        variant={variant}
        className={cn("cmp-view-item__empty", variant)}
      />
    );

  return (
    <Grid.Item variant={variant} className={cn("cmp-view-item column")}>
      <View className="cmp-view-item__label">{label}</View>
      <View className="cmp-view-item__value">{value || "--"}</View>
    </Grid.Item>
  );
};

type Props = {
  label?: string | React.ReactElement;
  value?: string | boolean | number | React.ReactElement;
  variant?:
    | "is-three-quarters"
    | "is-two-thirds"
    | "is-half"
    | "is-one-third"
    | "is-one-quarter"
    | "is-full";
};

export default ViewItem;
