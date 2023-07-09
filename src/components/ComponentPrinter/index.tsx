import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import { temp1obj1, template1Func } from "../PdfButton";
import { Grid, View, ViewItem } from "../commons";

const ComponentPrinter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (receiptRef.current) {
      receiptRef.current.innerHTML = template1Func(temp1obj1);
    }
  }, []);
  return (
    <View className="m-4 p-4">
      <ReactToPrint
        trigger={() => {
          return <button>Print a component</button>;
        }}
        content={() => ref.current}
        print={(target) => {
          if (target.contentWindow) {
            target.outerHTML;
            // const iframeDocument =
            //   target.contentWindow.document.documentElement.outerHTML;
            html2canvas(target.contentWindow.document.body, {
              scale: 4,
              width: 2000,
            }).then((canvas) => {
              const imageData = canvas.toDataURL("image/jpeg", 1);
              const pdf = new jsPDF();
              pdf.addImage(imageData, "JPEG", 0, 0, 580, 0);
              const pdfData = pdf.output("datauristring", {
                filename: "component-pdf.pdf",
              });
              // pdf.save();
              const newTab = window.open();
              if (newTab)
                newTab.document.write(
                  // target.outerHTML
                  `<html><head><title>component-pdf</title></head><iframe width="100%" height="100%" src="${pdfData}"></iframe></html>`
                );
            });
            // const pdf = new jsPDF();
            // pdf.html(iframeDocument, {
            //   callback: function (doc) {
            //     const pdfData = doc.output("datauristring", {
            //       filename: "component-pdf.pdf",
            //     });
            //     const newTab = window.open();
            //     if (newTab)
            //       newTab.document.write(
            //         // target.outerHTML
            //         `<html><head><title>component-pdf</title></head><iframe width="100%" height="100%" src="${pdfData}"></iframe></html>`
            //       );
            //   },
            //   x: 0,
            //   y: 0,
            //   width: 170,
            //   windowWidth: 650,
            //   autoPaging: true,
            //   margin: 8,
            // });
          }
          return new Promise((res) => res(target));
        }}
      />
      <View
        forwardRef={ref}
        className="m-4"
        align="center"
        style={{ width: "fit-content" }}
      >
        <Grid.Wrap>
          <ViewItem label={"Register ID"} value="REG03" />
          <ViewItem label={"Staff"} value="Dung Nhung" />
          <ViewItem label={"Transaction Date"} value="25/12/1999" />
          <ViewItem label={"Payer"} value="Tue Truong" />
          <ViewItem label={"Register ID"} value="REG03" />
          <ViewItem label={"Staff"} value="Dung Nhung" />
          <Grid.Item variant="is-full">
            <div ref={receiptRef} />
          </Grid.Item>
        </Grid.Wrap>
      </View>
    </View>
  );
};

export default ComponentPrinter;
