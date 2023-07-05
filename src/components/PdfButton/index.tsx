import Handlebars from "handlebars";
import { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";

import "./styles.scss";

const template1 = `<div class="pdf-container">
        <img src="{{imgUrl}}" style="width: 200px; margin-bottom: 48px" />
        <div class="view-item">
          <div class="view-item__label">Register ID</div>
          <div class="view-item__value">{{registerId}}</div>
        </div>
        <div class="view-item">
          <div class="view-item__label">Staff</div>
          <div class="view-item__value">{{staff}}</div>
        </div>
        <div class="view-item">
          <div class="view-item__label">Transaction Date</div>
          <div class="view-item__value">{{transationDate}}</div>
        </div>
        <div class="view-item">
          <div class="view-item__label">Transaction Number</div>
          <div class="view-item__value">{{transationnumber}}</div>
        </div>
        <div class="view-item" style="margin-bottom: 40px">
          <div class="view-item__label">Payer</div>
          <div class="view-item__value">{{payer}}</div>
        </div>
        <div class="sub-label" style="margin-bottom: 16px">Description</div>
        <table style="margin-bottom: 16px">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>EPA Registration Number</th>
              <th>Type</th>
              <th>Company</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {{#each tableData}}
            <tr>
              <td>{{this.name}}</td>
              <td>{{this.epaNumber}}</td>
              <td>{{this.type}}</td>
              <td>{{this.company}}</td>
              <td>{{this.price}}</td>
            </tr>
            {{/each}}
          </tbody>
        </table>
        <div class="view-item">
          <div class="view-item__label">Amount Due</div>
          <div class="view-item__value">{{amountDue}}</div>
        </div>
        <div class="view-item" style="margin-bottom: 40px">
          <div class="view-item__label">Amount Paid</div>
          <div class="view-item__value">{{amountPaid}}</div>
        </div>
        <div class="sub-label">Check</div>
        <div class="view-item">
          <div class="view-item__label">Check Date</div>
          <div class="view-item__value">{{checkDate}}</div>
        </div>
        <div class="view-item">
          <div class="view-item__label">Check #{{checkId}}</div>
          <div class="view-item__value">{{payment}}</div>
        </div>
      </div>`;

const tableData = [
  {
    name: "Kroger Pet Pride Flea Spray 45-68 lbs",
    epaNumber: "1234567890",
    type: "Chemical",
    company: "Datahouse Asia",
    price: "$930",
  },
  {
    name: "Kroger Pet Pride Flea Spray 45-68 lbs",
    epaNumber: "1234567890",
    type: "Device",
    company: "Datahouse Asia",
    price: "$930",
  },
  {
    name: "Kroger Pet Pride Flea Spray 45-68 lbs",
    epaNumber: "1234567890",
    type: "Chemical",
    company: "Datahouse Asia",
    price: "$930",
  },
];
const temp1obj1 = {
  imgUrl:
    "https://pesticides-web-storage-develop.s3.us-west-2.amazonaws.com/public/logo-splash.svg",
  registerId: "REG03",
  staff: "John Doe",
  transationDate: "5/9/2023 1:23:59 PM",
  transationnumber: "9142",
  payer: "Pyxis Regulatory Consulting, Inc.",
  amountDue: "2190 $",
  amountPaid: "2190 $",
  checkDate: "5/9/2023 1:23:59 PM",
  payment: "2190 $",
  tableData,
};

const template1Func = Handlebars.compile(template1);

const PdfButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = template1Func(temp1obj1);
    }
  }, []);

  return (
    <div>
      <ReactToPrint
        trigger={() => {
          return <button>Print a pdf</button>;
        }}
        content={() => ref.current}
      />
      <div style={{ marginTop: 40 }}>
        <div ref={ref} />
      </div>
    </div>
  );
};

export default PdfButton;
