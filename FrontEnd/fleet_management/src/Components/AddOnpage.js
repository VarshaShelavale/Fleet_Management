import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addon.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { MDBBtn } from "mdb-react-ui-kit";

const AddOnpage = () => {
  const navigate = useNavigate();

  const { total_amt, settotal_amt } = useSelectedOptions();
  const [adonlist, setaddonlist] = useState([]);

  const { isAuthenticated, isadminAuthenticated } = useSelectedOptions();
  const handleCheckboxChange = (addon) => {
    settotal_amt((amt) => amt + addon.daily_rate * (addon.checked ? -1 : 1));

    setaddonlist((prevList) =>
      prevList.map((item) =>
        item.addon_name === addon.addon_name
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/getaddon")
      .then((res) => res.json())
      .then((data) => setaddonlist(data));
  }, []);
  const handleContinueClick = () => {
    // Store selected values in session storage
    console.log(total_amt);
    // sessionStorage.setItem("addonamt", total_amt);
    // Perform any additional actions or navigation here
    if (isAuthenticated) {
      navigate("/booking");
    } else if (isadminAuthenticated) {
      navigate("/userReg");
    } else {
      navigate("/login", { state: "formfill" });
    }
  };

  return (
    <div className="addon-container">
      {adonlist.map((addon) => (
        <>
          <div className="addon-item">
            <input
              type="checkbox"
              id={addon.addon_name}
              onChange={() => handleCheckboxChange(addon)}
              checked={addon.checked}
            />
            <label htmlFor="gpsCheckbox">{addon.addon_name}</label>
            <label className="rate">Rate: Rs.{addon.daily_rate}</label>
          </div>
          <br />
        </>
      ))}

      <MDBBtn
        color="warning"
        type="submit"
        value="Continue booking"
        onClick={handleContinueClick}
      >
        Continue Booking
      </MDBBtn>
    </div>
  );
};

export default AddOnpage;
