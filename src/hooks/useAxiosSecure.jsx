import axios from "axios";
import { useEffect } from "react";
import useMyContext from "../hooks/useMyContext";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://burgry-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useMyContext();

  useEffect(() => {
    instance.interceptors.request.use(
      function (config) {
        if (config) {
          config.headers.authorization = localStorage.getItem("access-token");
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },

      function (error) {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [instance];
};

export default useAxiosSecure;
