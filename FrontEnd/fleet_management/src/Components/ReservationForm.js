import { useEffect, useState } from "react";
import "./Reservation.Module.css";
import { useNavigate } from "react-router-dom";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { MDBBtn } from "mdb-react-ui-kit";
function ReservationForm() {
  const { setpairport } = useSelectedOptions();
  const { pickupDate, setPickupDate } = useSelectedOptions();
  const { returnDate, setReturnDate } = useSelectedOptions("");
  const { pickupCity, setPickupCity } = useSelectedOptions(0);
  const [selectedOption, setSelectedOption] = useState(true);
  const [selectedOption2, setSelectedOption2] = useState(true);
  const [rairportid, setrairport] = useState(0);
  const [states, setState] = useState([]);
  const [pcities, setpCities] = useState([]);
  const [rcities, setrCities] = useState([]);
  const [airports, setairports] = useState([]);
  const [airportCodepickUp, setAirportCodePickUp] = useState("");
  const [returnCity, setReturnCity] = useState(0);
  const [airportCodereturn, setAirportCodeReturn] = useState("");
  const [pickUpState, setPickUpState] = useState(0);
  const [returnState, setReturnState] = useState(0);
  const [rstate, setrState] = useState("");
  const [pstate, setpState] = useState("");
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];
  useEffect(function () {}, []);
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      pickupDate,
      returnDate,
      airportCodepickUp,
      pickupCity,
      returnCity,
      airportCodereturn,
      pickUpState: pstate,
      returnState: rstate,
    };

    console.log(data);
    if (rairportid) {
      navigate("hubs/" + rairportid, { state: "airportid" });
    }

    if (returnCity) {
      navigate("hubs/" + returnCity, { state: "cityid" });
    }
  }

  useEffect(() => {
    function getcode(code, setairport) {
      fetch("http://localhost:8080/api/airports/" + code)
        .then((res) => res.json())
        .then((data) => {
          setairport(data.airport_id);
        });
    }
    if (airportCodepickUp) getcode(airportCodepickUp, setpairport);
    if (airportCodereturn) getcode(airportCodereturn, setrairport);
  }, [airportCodepickUp, airportCodereturn]);
  useEffect(() => {
    function getState(stateid, setstate) {
      const data = states.filter((state) => stateid == state.id);
      setstate(data[0].name);
    }
    if (pickUpState) {
      getState(pickUpState, setpState);
    }
    if (returnState) {
      getState(returnState, setrState);
    }
  }, [pickUpState, returnState]);

  useEffect((e) => {
    fetch("http://localhost:8080/api/getairports")
      .then((res) => res.json())
      .then((data) => setairports(data));
  }, []);
  useEffect((e) => {
    fetch("http://localhost:8080/api/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);
  useEffect(() => {
    // Fetch cities for the selected state
    const fetchCities = async (stateid, setCities) => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/cities/" + stateid
        );

        const data = await response.json();
        setCities(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    if (pickUpState) {
      fetchCities(pickUpState, setpCities);
    }
    if (returnState) {
      fetchCities(returnState, setrCities);
    }
  }, [pickUpState, returnState]);

  return (
    <div>
      <div id="app">
        <div className="container">
          <div className="left-section">
            <img src="./Home.jpg"></img>
          </div>
          <div className="right-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pickupDate">Pickup Date:</label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={pickupDate}
                  required
                  min={today}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="returnDate">Return Date:</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={returnDate}
                  required
                  min={today}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>PickUp Location :</label>
              </div>
              <label>
                <input
                  type="radio"
                  checked={!selectedOption}
                  onClick={() => setSelectedOption(!selectedOption)}
                />
                Do you want to select using Airport ?
              </label>
              {selectedOption ? (
                <div className="form-group">
                  <label htmlFor="pickupState">State:</label>

                  <select
                    id="pickupState"
                    name="pickupState"
                    onChange={(e) => {
                      setPickUpState(e.target.value);
                    }}
                  >
                    <option>Select</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="pickupCity">Pickup City:</label>

                  <select
                    id="pickupCity"
                    name="pickupCity"
                    onChange={(e) => setPickupCity(e.target.value)}
                  >
                    <option>Select</option>
                    {pcities.map((city) => (
                      <option key={city.cityId} value={city.cityId}>
                        {city.cityName}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="pickupLocation">Airport Code:</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={airportCodepickUp}
                    onChange={(e) => setAirportCodePickUp(e.target.value)}
                  />
                  <select
                    id="pickupAirport"
                    name="pickupAirport"
                    onChange={(e) => setAirportCodePickUp(e.target.value)}
                  >
                    <option>Select</option>
                    {airports.map((airport) => (
                      <option
                        key={airport.airport_code}
                        value={airport.airport_code}
                      >
                        {airport.airport_name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label>Return Location :</label>
              </div>
              <label>
                <input
                  type="radio"
                  checked={!selectedOption2}
                  onClick={() => setSelectedOption2(!selectedOption2)}
                />
                Do you want to select using Airport ?
              </label>
              {!selectedOption2 ? (
                <div className="form-group">
                  <label htmlFor="returnLocation">Airport Code :</label>
                  <input
                    type="text"
                    id="returnLocation"
                    name="returnLocation"
                    value={airportCodereturn}
                    onChange={(e) => setAirportCodeReturn(e.target.value)}
                  />
                  <select
                    id="returnAirport"
                    name="returnAirport"
                    onChange={(e) => setAirportCodeReturn(e.target.value)}
                  >
                    <option>Select</option>
                    {airports.map((airport) => (
                      <option
                        key={airport.airport_code}
                        value={airport.airport_code}
                      >
                        {airport.airport_name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="returnState">Return State:</label>

                  <select
                    id="returnState"
                    name="returnState"
                    onChange={(e) => setReturnState(e.target.value)}
                  >
                    <option>Select</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="returnCity">Return City:</label>

                  <select
                    id="returnCity"
                    name="returnCity"
                    onChange={(e) => setReturnCity(e.target.value)}
                  >
                    <option>Select</option>
                    {rcities.map((city) => (
                      <option key={city.cityId} value={city.cityId}>
                        {city.cityName}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <MDBBtn type="submit" className="continueButton">
                Continue Booking
              </MDBBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
