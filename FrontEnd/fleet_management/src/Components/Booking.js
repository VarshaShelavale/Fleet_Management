import { useEffect, useState } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { useNavigate } from "react-router-dom";

function Booking() {
  const {
    selectedpickHub,
    selecteddropHub,
    cartype,
    total_amt,
    pickupDate,
    returnDate,
  } = useSelectedOptions();
  console.log(selecteddropHub);
  console.log(selecteddropHub);
  const navigate = useNavigate();
  const [estamt, setEstamt] = useState();
  const user = JSON.parse(sessionStorage.getItem("userinfo"));
  const mytoken = localStorage.getItem("token");
  function calculateDays(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const differenceMs = endDate - startDate;

    // Convert milliseconds to days
    const oneDayMs = 24 * 60 * 60 * 1000;
    const differenceDays = Math.round(differenceMs / oneDayMs);

    return differenceDays;
  }
  function calculateestimated_amt() {
    const numDays = calculateDays(pickupDate, returnDate);
    console.log("Number of days:", numDays);
    if (numDays > 30) {
      const amtmonth = (numDays / 30) * Number(cartype.month_Rate);
      const amtremain = (numDays % 30) * Number(cartype.daily_Rate);
      return amtmonth + amtremain;
    } else if (numDays > 7) {
      const amtmonth = (numDays / 7) * Number(cartype.weekly_Rate);
      const amtremain = (numDays % 7) * Number(cartype.daily_Rate);
      return amtmonth + amtremain;
    } else if (numDays == 0) {
      return Number(cartype.daily_Rate);
    } else {
      const amt = numDays * Number(cartype.daily_Rate);
      return amt;
    }
  }
  useEffect((e) => {
    const estamt = calculateestimated_amt().toFixed(2);
    console.log(total_amt);
    setEstamt(estamt + total_amt);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const booking = {
      car_id: cartype.cartype_id,
      end_date: returnDate,
      start_date: pickupDate,
      drophub_id: selecteddropHub[0].hub_id,
      estamount: estamt,
      regId: user.regId,
      pickuphub_id: selectedpickHub[0].hub_id,
    };
    console.log(JSON.stringify(booking));
    // const header = { Authorization: `Bearer ${mytoken}` };
    fetch("http://localhost:8080/api/bookingsave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mytoken}`,
      },
      body: JSON.stringify(booking),
    })
      .then(() => {
        // console.log("Success:", data);
        alert("Booking Successful");
        navigate("/cancelbooking");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px" /* Adjust the width as needed */,
        height: "750px" /* Adjust the height as needed */,
        textAlign: "left",
        border: "2px solid #2e3437",
        marginLeft: "500px",
      }}
    >
      <form style={{ padding: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Booking Form</h2>
        </div>
        <div>
          <label>Start Date: {pickupDate} </label>
        </div>
        <div>
          <label>End Date: {returnDate}</label>
        </div>
        <div>
          <label>Pickup Hub Name: {selectedpickHub[0].hub_Name}</label>
          <br />
          <label>Pickup Hub Address: {selectedpickHub[0].address}</label>
        </div>
        <div>
          <label>Drop Hub Name: {selecteddropHub[0].hub_Name}</label>
          <br />
          <label>Drop Hub Address: {selecteddropHub[0].address}</label>
        </div>
        <div>
          <input type="text" name="firstName" value={user.regId} hidden />
        </div>
        <div>
          <label>First Name: {user.firstName}</label>
        </div>
        <div>
          <label>Last Name: {user.lastName}</label>
        </div>
        <div>
          <label>Mobile Number: {user.mobileNumber} </label>
        </div>
        <div>
          <label>Email ID: {user.emailId}</label>
        </div>
        <div>
          <label>Driver's License Number: {user.dLNumber}</label>
        </div>
        <div>
          <label>Aadhar Number: {user.aadharNo} </label>
        </div>
        <div>
          <label>Passport Number: {user.passportNo}</label>
        </div>

        <div>
          <label>City: {user.city}</label>
        </div>

        <div>
          <label>Estimated Amount: {estamt} </label>
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" onClick={handleSubmit} style={{ margin: 10 }}>
            Submit
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
