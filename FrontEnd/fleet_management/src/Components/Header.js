import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="./Logo.jpg"
        width="100"
        height="20"
        alt="inDrive Logo"
        style={{ borderRadius: "30px" }}
      />

      <h5>Book Online or Call 1-800-DRIVE</h5>
    </header>
  );
}

export default Header;
