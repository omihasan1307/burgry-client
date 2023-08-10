import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useLocation } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading, role } = useMyContext();
  const [wait, setWait] = useState(true);

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 3000);
  }, []);

  if (wait) {
    return (
      <p className="text-center py-52 text-5xl text-[#FFBA00]">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      </p>
    );
  }
  console.log(user, role);

  if (user && role === "admin") {
    return children;
  } else {
    return (
      <Navigate
        to={role === "admin" ? "/login" : "/"}
        state={{ from: location }}
        replace
      />
    );
  }
};

export default AdminPrivateRoute;
