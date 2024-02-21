import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

function Customercare() {
  const rowStyle = {
    // Add border
    backgroundColor: "#aed9e0", // Add gray background color
    padding: "30px",
    // Add padding for spacing
  };
  return (
    <Container style={{ margin: "50px" }}>
      <Row style={rowStyle}>
        <div>
          <p>
            India Drive Rental strives to provide exceptional service before,
            during and after a rental and our reputation clearly indicates that
            we manage these processes extremely well. We want to hear from you
            should you have any concerns or better yet, a compliment and can
            assure you that we take your opinion very seriously. We want to be
            your preferred car rental company and will continue to add value to
            your car rental experience by listening to you, our valued Customer.
          </p>

          <h2>Contact Details:</h2>
          <ul>
            <li>Email: info@IndiaDrive.com</li>
            <li>Contact Details:+91 9999999999 </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Customercare;
