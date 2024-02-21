import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";

function Login() {
  const location = useLocation();
  const state = location.state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { login, adminlogin } = useSelectedOptions();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");

      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/register/${email}/${password}`
      );
      const result = await response.json();
      login(result);
      console.log(result);

      if (state === "formfill") {
        navigate("/booking");
      } else navigate("/");
    } catch (error) {
      setError("Please enter  valid credentials...");
    }
  };
  const adminsubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    if (email === "a@gmail.com" && password === "a@123") {
      const admin = {
        email,
        password,
        Name: "fleeman admin",
      };
      adminlogin(admin);
      navigate("/");
    } else {
      setError("Please enter  valid credentials...");
    }
  };
  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form>
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {error && <div className="error-message">{error}</div>}

        <div className="login-options">
          <button type="submit" onClick={handleSubmit}>
            Login as User
          </button>
        </div>
        {state === "formfill" && (
          <p>
            You don't have account ? <Link to="/userReg">Register</Link>
          </p>
        )}
        {state !== "formfill" && (
          <div className="login-options">
            <button type="submit" onClick={(e) => adminsubmit(e)}>
              Login as Admin
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
