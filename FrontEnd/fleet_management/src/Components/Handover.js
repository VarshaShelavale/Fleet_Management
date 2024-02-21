import { useEffect, useState } from "react";

import {
  MDBTable,
  MDBTableBody,
  MDBBtn,
  MDBInput,
  MDBTableHead,
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router-dom";

function Handover() {
  const [email, setEmail] = useState("");
  const [booking, setBooking] = useState([]);
  const [customer, setCustomer] = useState({});
  const [book, setBook] = useState(null);
  const [cartypeName, setCartypeName] = useState(null);
  const [cars, setCars] = useState(null);
  const [selectcar, setSelectedcar] = useState(true);
  const [selectedcarid, setselectedcarid] = useState(0);
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
  console.log(book);
  function getDetails(id) {
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
  function getCars() {
    if (book.car_id && book.pickuphub_id) {
      fetch(
        `http://localhost:8080/api/getcars/${book.pickuphub_id}/${book.car_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }

  function setChange(id) {
    setSelectedcar((e) => !e);
    setselectedcarid(id);
    fetch(`http://localhost:8080/${id}/availability?isAvailable=false`, {
      method: "PUT",
    })
      .then(console.log("successful"))

      .catch((err) => console.log(err));
  }
  function updateBooking() {
    if (book.bookingId && selectedcarid) {
      fetch(
        `http://localhost:8080/${book.bookingId}/updateCarcarid?carcarid=${selectedcarid}`,
        {
          method: "PUT",
        }
      )
        .then((res) => console.log(res))
        .then((err) => {
          console.log(err);
        });
    }
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
            <tr className="table-success">
              <th scope="row">Last Name</th>
              <td>{customer.lastName}</td>
            </tr>
            <tr className="table-danger">
              <th scope="row">Driving Licnce Number</th>
              <td>{customer.dLNumber}</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">Pick Up Date</th>
              <td>{book.start_date}</td>
            </tr>
            <tr className="table-info">
              <th scope="row">Drop Date</th>
              <td>{book.end_date}</td>
            </tr>
            <tr className="table-dark">
              <th scope="row">Aadhar No</th>
              <td>{customer.aadharNo}</td>
            </tr>
            <tr className="table-light">
              <th scope="row">Category Name</th>
              <td>{cartypeName}</td>
            </tr>
            <tr>
              <td>
                <MDBBtn
                  color="info"
                  onClick={() => {
                    getCars();
                  }}
                >
                  Get Available Cars
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      )}
      {cars && (
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col" className="w-25">
                Car Details
              </th>
              <th scope="col" className="w-25">
                Select
              </th>
            </tr>
          </MDBTableHead>
          {cars.map((c) => (
            <MDBTableBody>
              <tr className="align-bottom">
                <td>{c.car_details}</td>
                <td>
                  <MDBBtn
                    onClick={() => {
                      setChange(c.car_id);
                    }}
                  >
                    Select
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      )}
      <MDBBtn
        color="info"
        style={{ display: "flex", alignItems: "center", margin: "20px" }}
        onClick={() => {
          updateBooking();
          alert("Handover Successfull.. ");
          navigate("/");
        }}
        disabled={selectcar}
      >
        Handover
      </MDBBtn>
    </div>
  );
}

export default Handover;
