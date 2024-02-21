import { useEffect, useState } from "react";

import {
  MDBTable,
  MDBTableBody,
  MDBBtn,
  MDBInput,
  MDBTableHead,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";

function Return() {
  const [email, setEmail] = useState("");
  const [booking, setBooking] = useState([]);
  const [customer, setCustomer] = useState({});
  const [book, setBook] = useState(null);
  const [cartypeName, setCartypeName] = useState(null);
  const [estamt, setestamt] = useState(0);
  const [fuelstatus, setfuelstatus] = useState("");
  const { invoiceid, setinvoiceid } = useSelectedOptions();
  const navigate = useNavigate();

  useEffect(() => {
    function fetchinfo() {
      if (email) {
        fetch(`http://localhost:8080/api/getuser/${email}`)
          .then((res) => res.json())
          .then((data) => {
            setBooking(data.booking);
            setCustomer(data);
          })
          .catch((err) => console.log(err));
      }
    }
    fetchinfo();
  }, [email]);
  function getDetails(id) {
    setestamt(id.estamount);
    setBook(id);
    function fetchinfo() {
      if (id.car_id) {
        fetch(`http://localhost:8080/api/getcartype/${id.car_id}`)
          .then((res) => res.json())
          .then((data) => {
            setCartypeName(data.cartype_Name);
          })
          .catch((err) => console.log(err));
      }
    }
    fetchinfo();
  }
  function changeestamt() {
    if (fuelstatus === "half") {
      setestamt((e) => e + 2250);
    } else if (fuelstatus === "empty") {
      setestamt((e) => e + 4500);
    }
    console.log(book);
  }
  function generateInvoice() {
    const admininfo = JSON.parse(sessionStorage.getItem("admininfo"));
    console.log(admininfo.Name);

    const invoice = {
      billingid: book.bookingId,
      adminname: admininfo.Name,
      custname: customer.firstName + " " + customer.lastName,
      emailid: customer.emailId,
      billamount: estamt,
      start_date: book.start_date,
      end_date: book.end_date,
      category: cartypeName,
    };
    console.log(invoice);
    setinvoiceid(invoice.billingid);
    fetch("http://localhost:8080/api/generatepdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoice),
    })
      .then(() => {
        console.log("Success:");

        setChange();
        deleteBooking(book.bookingId);
        changehub();
        console.log(book);
        console.log(book.bookingId);
        console.log(invoiceid);
        navigate("/invoice", { state: invoice });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function deleteBooking(e) {
    if (e) {
      fetch(`http://localhost:8080/api/delete/${e}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Optionally, handle successful response
          console.log("Item deleted successfully");
        })
        .catch((err) => {
          console.error("There was a problem with your fetch operation:", err);
        });
    }
  }

  function setChange() {
    fetch(
      `http://localhost:8080/${book.carcarid}/availability?isAvailable=true`,
      {
        method: "PUT",
      }
    )
      .then(console.log("successful"))

      .catch((err) => console.log(err));
  }
  function changehub() {
    fetch(
      `http://localhost:8080/api/${book.carcarid}/hubId?hubId=${book.drophub_id}`,
      {
        method: "PUT",
      }
    )
      .then(console.log("successful"))

      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
        <MDBInput
          label="Enter Email"
          id="form1"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {email && (
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Estimated Amount</th>
              <th scope="col">Details</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {booking.map((book) => (
              <tr>
                <td></td>
                <td>{book.start_date}</td>
                <td>{book.end_date}</td>
                <td>{book.estamount}</td>
                <td>
                  <MDBBtn color="warning" onClick={() => getDetails(book)}>
                    Get Details
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      )}
      {book && (
        <MDBTable>
          <MDBTableBody>
            <tr className="table-primary">
              <th scope="row">Booking Id</th>
              <td>{book.bookingId}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">First Name</th>
              <td>{customer.firstName}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Last Name</th>
              <td>{customer.lastName}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Driving Licnce Number</th>
              <td>{customer.dLNumber}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Pick Up Date</th>
              <td>{book.start_date}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Drop Date</th>
              <td>{book.end_date}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Aadhar No</th>
              <td>{customer.aadharNo}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Category Name</th>
              <td>{cartypeName}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Bill Amount</th>
              <td>{estamt.toFixed(2)}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      )}
      {book && (
        <>
          <MDBBtn
            style={{ alignItems: "center", margin: "20px" }}
            onClick={() => {
              changeestamt();
            }}
          >
            Fuel Status
          </MDBBtn>
          <br></br>

          <MDBRadio
            style={{ alignItems: "center", margin: "10px" }}
            name="inlineRadio"
            id="inlineRadio1"
            value="empty"
            label="Empty"
            inline
            onChange={(e) => setfuelstatus(e.target.value)}
          />
          <MDBRadio
            style={{ alignItems: "center", margin: "10px" }}
            name="inlineRadio"
            id="inlineRadio2"
            value="full"
            label="Full"
            inline
            onChange={(e) => setfuelstatus(e.target.value)}
          />
          <MDBRadio
            style={{ alignItems: "center", margin: "10px" }}
            name="inlineRadio"
            id="inlineRadio3"
            value="half"
            label="Half"
            inline
            onChange={(e) => setfuelstatus(e.target.value)}
          />
        </>
      )}
      <br></br>
      <br></br>
      <MDBBtn
        style={{ alignItems: "center", margin: "20px" }}
        onClick={generateInvoice}
      >
        Generate Invoice
      </MDBBtn>
    </div>
  );
}

export default Return;
