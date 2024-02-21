import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </>
  );
}

export default Home;
