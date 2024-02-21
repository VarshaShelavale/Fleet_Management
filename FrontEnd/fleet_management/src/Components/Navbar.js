import { NavLink } from "react-router-dom";
import "./Navbar.Module.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";

function Navbar() {
  const { isAuthenticated, logout, isadminAuthenticated } =
    useSelectedOptions();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/memberresister">Member Registration</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/cancelbooking">Cancel Booking</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cutomercare">Customer care </NavLink>
          </li>
          {!isadminAuthenticated && !isAuthenticated ? (
            <li className="login-button">
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li className="login-button" onClick={logout}>
              <NavLink to="/">Logout</NavLink>
            </li>
          )}
          {isadminAuthenticated && (
            <>
              <li className="login-button">
                <NavLink to="/return">Return</NavLink>
              </li>
              <li className="login-button">
                <NavLink to="/handover">Handover</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
