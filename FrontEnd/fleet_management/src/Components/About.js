import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function About() {
  const containerStyle = {
    maxWidth: "800px", // Set maximum width for the container
    margin: "auto", // Center the container horizontally
    padding: "20px",
    marginTop: "20px",
    marginBottom: "20px", // Add padding for spacing
  };

  const rowStyle = {
    padding: "20px", // Add padding for spacing
  };

  return (
    <Container style={containerStyle}>
      <Row style={rowStyle}>
        <div className="section">
          <div>
            <h1>About Us</h1>
            <p>
              Global Travels represents the India Drive, which is one of the
              best rent based online booking systems of cab rentals in India. as
              the master licensee of Global Travels.
            </p>
            <p>Our Mission:</p>
            <p>
              Our mission is to be recognized as the global leader in Cab Rental
              for companies and the public and private sector by partnering with
              our clients to provide the best and most efficient Cab Rental
              solutions and to achieve service excellence.
            </p>
            <p>Our Strategy:</p>
            <p>
              The strategy of CabGurgaon is to develop a global approach across
              the corporation where appropriate to facilitate local businesses
              to flourish.
            </p>

            <p>Our Values:</p>
            <ul>
              <li>
                Customer Satisfaction: Your satisfaction is our priority. We're
                committed to ensuring you have a seamless and enjoyable car
                rental experience.
              </li>
              <li>
                Expertise: Our long experience and global presence have given us
                extensive knowledge of fleet and vehicle management. We share
                this knowledge in a simple and understandable way.
              </li>
              <li>
                Convenience: We offer easy online booking and flexible pick-up
                and drop-off options to suit your schedule.
              </li>
              <li>
                Passion: We are proud of our company and of the clients we work
                for, and we show this in all of our communication and actions.
              </li>
            </ul>

            <p>Thank you for choosing India Drive Car Rentals.</p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default About;
