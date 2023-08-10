import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <Navbar />
      <Outlet />
      {hideHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
