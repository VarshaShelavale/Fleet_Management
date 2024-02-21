import ReactPrint from "react-to-print";
import { useRef } from "react";
import Barcode from "react-barcode";
import { useLocation } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./Invoice.css";
function Invoice() {
  const location = useLocation();
  const invoice = location.state;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const day = currentDate.getDate();
  console.log(invoice);

  const ref = useRef();

  return (
    <>
      <div className="containerinvoice" ref={ref}>
        <div className="containerinvoice">
          <div className="row">
            <div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 brcode">
                    <Barcode
                      value={`4n%${invoice.billingid}+ut%`}
                      width={1}
                      height={50}
                      displayValue={false}
                    />
                  </div>
                  <div className="col-md-8 text-right bbc">
                    <h4 style={{ color: "#325aa8" }}>
                      <strong>India Drive</strong>
                    </h4>
                    <p>(+91) 1234567890</p>
                    <p>indiadrive@gmail.com</p>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 style={{ color: "#325aa8" }}>INVOICE</h2>
                    <h5> Id: {invoice.billingid}</h5>
                  </div>
                </div>
                <br />
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>

                        <th>User EmailId</th>
                        <th>Pick Up Date</th>
                        <th>Drop Date </th>
                        <th>Car Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice && (
                        <tr key={invoice.billingid}>
                          <td>{invoice.billingid}</td>
                          <td>{invoice.custname}</td>
                          <td>{invoice.emailid}</td>
                          <td>{invoice.start_date}</td>
                          <td>{invoice.end_date}</td>
                          <td>{invoice.category}</td>
                        </tr>
                      )}
                      <tr>
                        <td colSpan="4" style={{ textAlign: "right" }}>
                          Total Amount :
                        </td>
                        <td>{invoice.billamount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="col-md-12">
                    <p>
                      <b>Date :</b> {`${day}-${month}-${year}`}
                    </p>
                    <br />
                    <p>
                      <b>Name : {invoice.adminname}</b>
                    </p>
                    <p>
                      <b>Contact: (+91) 1234567890</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",

          textAlign: "left",

          marginLeft: "700px",
          marginBottom: "20px",
        }}
      >
        <ReactPrint
          trigger={() => <MDBBtn color="info">Print</MDBBtn>}
          content={() => ref.current}
          documentTitle={`INVOICE ${invoice.billingid}`}
        />
      </div>
    </>
  );
}

export default Invoice;
