import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

import { MDBBtn } from "mdb-react-ui-kit";
function CancelBooking() {
  const [email, setEmail] = useState("");
  const [booking, setBooking] = useState([]);
  const [deleted, setdeleted] = useState(false);
  useEffect(() => {
    const user = sessionStorage.getItem("userinfo");

    const emailUser = JSON.parse(user).emailId;
    console.log(emailUser);
    setEmail(emailUser);
  }, []);
  useEffect(() => {
    function fetchinfo() {
      if (email) {
        fetch(`http://localhost:8080/api/getuser/${email}`)
          .then((res) => res.json())
          .then((data) => setBooking(data.booking))
          .catch((err) => console.log(err));
      }
    }
    fetchinfo();
  }, [email, deleted]);
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
          setdeleted((e) => !e);
        })
        .catch((err) => {
          console.error("There was a problem with your fetch operation:", err);
        });
    }
  }
  return (
    <div>
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Estimated Amount</th>
            <th scope="col">Cancel</th>
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
                <MDBBtn
                  className="me-1"
                  color="danger"
                  type="button"
                  value="Cancel Booking"
                  onClick={() => {
                    deleteBooking(book.bookingId);
                  }}
                >
                  Cancel Booking
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default CancelBooking;
