import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Grid, View, ViewItem } from "../commons";

const ComponentPrinter = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <View className="m-4 p-4">
      <ReactToPrint
        trigger={() => {
          return <button>Print a component</button>;
        }}
        content={() => ref.current}
      />
      <View forwardRef={ref} className="m-4">
        <Grid.Wrap>
          <ViewItem label={"Register ID"} value="REG03" />
          <ViewItem label={"Staff"} value="Dung Nhung" />
          <ViewItem label={"Transaction Date"} value="25/12/1999" />
          <ViewItem label={"Payer"} value="Tue Truong" />
        </Grid.Wrap>
      </View>
    </View>
  );
};

export default ComponentPrinter;
