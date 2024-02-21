import { createContext, useContext, useState } from "react";

const SelectedOptionsContext = createContext();
export function SelectedOptionsProvider({ children }) {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupCity, setPickupCity] = useState(0);
  const [selectedpickHub, setSelectedpickHub] = useState(0);
  const [selecteddropHub, setSelecteddropHub] = useState(0);
  const [pairportid, setpairport] = useState(0);
  const [cartype, setCartype] = useState([]);
  const [total_amt, settotal_amt] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isadminAuthenticated, setIsadminAuthenticated] = useState(false);
  const [invoiceid, setinvoiceid] = useState();
  const login = (userData) => {
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("userinfo", JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userinfo");
    setIsAuthenticated(false);
    setIsadminAuthenticated(false);
    sessionStorage.removeItem("admininfo");
  };
  const adminlogin = (userdata) => {
    // sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("admininfo", JSON.stringify(userdata));
    setIsadminAuthenticated(true);
  };

  return (
    <SelectedOptionsContext.Provider
      value={{
        pickupDate,
        setPickupDate,
        returnDate,
        setReturnDate,
        pickupCity,
        setPickupCity,
        selectedpickHub,
        setSelectedpickHub,
        selecteddropHub,
        setSelecteddropHub,
        pairportid,
        setpairport,
        cartype,
        setCartype,
        total_amt,
        settotal_amt,
        isAuthenticated,
        login,
        logout,
        adminlogin,
        isadminAuthenticated,
        invoiceid,
        setinvoiceid,
      }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  );
}

export function useSelectedOptions() {
  return useContext(SelectedOptionsContext);
}
