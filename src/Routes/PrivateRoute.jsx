import { Navigate, useLocation } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import { CUSTOMER } from "../utilities/constant";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PrivateRoute = ({ children }) => {
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
  if (user && role === CUSTOMER) {
    return children;
  } else {
    return (
      <Navigate
        to={role === CUSTOMER ? "/login" : "/"}
        state={{ from: location }}
        replace
      />
    );
  }
};

export default PrivateRoute;
