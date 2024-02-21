import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import "./CarCategorymodule.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";

function CarCategory() {
  const { id } = useParams();
  const [carcategory, setCarCategory] = useState([]);
  // Add state to track hover status
  const { setCartype } = useSelectedOptions();

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/cartype/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarCategory(data);
      });
  }, [id]);
  const handleSelect = (e) => {
    // sessionStorage.setItem("selectedcartype", JSON.stringify(e));
    //console.log(e);
    setCartype(e);
    navigate("/addon");
  };
  return (
    <>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Car Type Name</th>
            <th scope="col">Daily Rate</th>
            <th scope="col">Weekly Rate</th>
            <th scope="col">Monthly Rate</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        {carcategory.map((car) => (
          <MDBTableBody key={car.cartype_id}>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div className="image-container">
                    <img
                      src={car.image_Path}
                      alt={car.cartype_Name}
                      style={{ width: "150px", height: "130px" }}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{car.cartype_Name}</p>
                  </div>
                </div>
              </td>

              <td>{car.daily_Rate}</td>
              <td>{car.weekly_Rate}</td>
              <td>{car.month_Rate}</td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={() => handleSelect(car)}
                >
                  Select
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </>
  );
}

export default CarCategory;
