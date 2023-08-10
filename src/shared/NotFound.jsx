import { Link } from "react-router-dom";
import notfound from "../assets/output-onlinegiftools.gif";
import UpdateSection from "../pages/Home/UpdateSection";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div>
        <img className="mx-auto" src={notfound} alt="" />
      </div>
      <Link to="/">
        <button className="bg-[#FFBA00] mb-10 px-5 flex uppercase mx-auto py-2 text-white rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
          Back to Home
        </button>
      </Link>
      <UpdateSection />
    </div>
  );
};

export default NotFound;
