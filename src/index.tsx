import ReactDOM from "react-dom/client";
import { ComponentPrinter, PdfButton } from "./components";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(<PdfButton />);
ReactDOM.createRoot(document.getElementById("root-logo")).render(
  <ComponentPrinter />
);
