import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MemberReg.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
function UserReg() {
  const navigate = useNavigate();
  const { login } = useSelectedOptions();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    dlNumber: "",
    passportNo: "",
    adhaarNumber: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Post form data to backend
    fetch("http://localhost:8080/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        if (token) {
          login(data.registration);
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          setErrorMessage("Please enter  valid credentials...");
        }
        navigate("/booking");
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("User Already exists!");
      });
  };
  return (
    <div className="containerForm">
      <form className="customerForm" onSubmit={handleSubmit}>
        <br />
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          required
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          required
        />
        <br />
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Mobile Number"
          onChange={handleChange}
          name="mobileNumber"
          value={formData.mobileNumber}
          required
        />

        <br />
        <label>Email Id</label>
        <input
          type="email"
          placeholder="Email Id"
          onChange={handleChange}
          name="emailId"
          value={formData.emailId}
          required
        />

        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          required
        />
        <br />
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={formData.city}
        />
        <br />

        <label>Local Driving Lic</label>
        <input
          type="text"
          placeholder="dL Number"
          onChange={handleChange}
          name="dLNumber"
          value={formData.dLNumber}
          required
        />

        <br />

        <label>Passport Number</label>
        <input
          type="text"
          placeholder="Enter Passport Number"
          onChange={handleChange}
          name="passportNo"
          value={formData.passportNo}
          required
        />

        <br />

        <label>Adhaar Number</label>
        <input
          type="text"
          placeholder="Enter Adhaar Number"
          onChange={handleChange}
          name="aadharNo"
          value={formData.aadharNo}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit">Continue Booking</button>
      </form>
    </div>
  );
}

export default UserReg;
