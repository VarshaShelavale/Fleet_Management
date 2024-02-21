import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HubSelect.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { MDBBtn } from "mdb-react-ui-kit";
function HubSelect() {
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState(0);
  const { setSelectedpickHub } = useSelectedOptions();
  const navigate = useNavigate();
  const { pickupCity } = useSelectedOptions();
  const { pairportid } = useSelectedOptions();
  const [select, setSelected] = useState(true);
  useEffect((e) => {
    if (pickupCity) {
      fetch("http://localhost:8080/api/hubs/" + pickupCity)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setHubs(data);
        });
    }
  }, []);
  useEffect(() => {
    const hub = hubs.filter((e) => e.hub_id == selectedHub);
    setSelectedpickHub(hub);
  }, [selectedHub]);
  useEffect((e) => {
    if (pairportid) {
      fetch("http://localhost:8080/api/hub/" + pairportid)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setHubs(data);
        });
    }
  }, []);
  const handleHubSelection = (event) => {
    console.log(event.target.value);
    setSelectedHub(event.target.value);
    setSelected(false);
  };
  const submitForm = (e) => {
    e.preventDefault();
    // sessionStorage.setItem("pickhubId", selectedHub);
    navigate("/carcategory/" + selectedHub);
  };
  return (
    <div className="hubSelectContainer">
      <form className="hubForm" onSubmit={submitForm}>
        <p>
          Please select your <strong>Pickup </strong>location..
        </p>

        {hubs.map((hub) => (
          <div key={hub.Hub_id} className="hubOption">
            <input
              type="radio"
              id={`hubRadio${hub.Hub_id}`}
              name="hubRadio"
              value={hub.hub_id}
              checked={selectedHub === hub.hub_id.toString()}
              onChange={handleHubSelection}
              style={{ marginRight: "10px" }}
            />
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubName">
              {hub.hub_Name}
            </label>
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubDetails">
              {hub.contact}
            </label>
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubDetails">
              {hub.address}
            </label>
          </div>
        ))}

        <MDBBtn type="submit" className="continueButton" disabled={select}>
          Continue Booking
        </MDBBtn>
      </form>
    </div>
  );
}

export default HubSelect;
