import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./HubSelect.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { MDBBtn } from "mdb-react-ui-kit";
function HubSelect() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState("");
  const { setSelecteddropHub } = useSelectedOptions();
  const [select, setSelected] = useState(true);
  const navigate = useNavigate();
  useEffect((e) => {
    if (state === "airportid") {
      fetch("http://localhost:8080/api/hub/" + id)
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
        });
    }
  }, []);
  useEffect((e) => {
    if (state === "cityid") {
      fetch("http://localhost:8080/api/hubs/" + id)
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
          console.log(data);
        });
    }
  }, []);
  useEffect(() => {
    const hub = hubs.filter((e) => e.hub_id == selectedHub);
    setSelecteddropHub(hub);
  }, [selectedHub]);
  const handleHubSelection = (event) => {
    setSelectedHub(event.target.value);
    setSelected(false);
  };
  const submitForm = (e) => {
    e.preventDefault();

    navigate("/pickuphubs");
  };
  return (
    <div className="hubSelectContainer">
      <form className="hubForm" onSubmit={submitForm}>
        <p>
          Please select your <strong>return </strong>location..
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
