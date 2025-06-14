import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
