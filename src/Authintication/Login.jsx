import { Link, useLocation, useNavigate } from "react-router-dom";
import burger from "../assets/payday1.png";
import useMyContext from "../hooks/useMyContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { CUSTOMER } from "../utilities/constant";
import useTitle from "../hooks/UseTitle";

const Login = () => {
  useTitle("LOGIN");
  const { googleSignIn, signInUser } = useMyContext();
  const [showError, SetShowError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data?.email, data?.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
        navigate(0);
        reset();
      })
      .catch((err) => {
        SetShowError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        axios
          .post(`https://burgry-server.vercel.app/users`, {
            userName: user?.displayName,
            userEmail: user?.email,
            userUID: user?.uid,
            photoURL: user?.photoURL,
            role: CUSTOMER,
          })
          .then(() => {
            navigate(from, { replace: true });
            navigate(0);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-2 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-36">
        <div>
          <img
            className="hover:-translate-y-4 duration-300 hover:duration-300"
            src={burger}
            alt=""
          />
        </div>
        <div className="border lg:w-[500px] px-16 py-10 rounded-2xl shadow-xl border-slate-800 hover:-translate-y-4 duration-300 hover:duration-300">
          <h1 className="text-center text-3xl text-white font-bold">
            Please Login !
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="text-xl text-white my-5">Email </h2>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 bg-[#171717] rounded w-full"
              />
              {errors.email && (
                <span className="text-red-500">
                  This email field is required
                </span>
              )}
            </div>
            <div>
              <h2 className="text-xl text-white my-5">Password </h2>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Your Password"
                className="px-4 py-2 bg-[#171717] rounded w-full"
                required
              />
              {errors.password && (
                <span className="text-red-500">
                  This email field is required
                </span>
              )}
            </div>
            {showError && <span className="text-red-500"> {showError} </span>}
            <button className="bg-[#FFBA00] text-xl  w-full mx-auto py-2 my-8 text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
              Login
            </button>
          </form>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="bg-[#FFBA00] text-xl w-full mx-auto py-2  text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 "
            >
              Google
            </button>
          </div>
          <p className="my-5">
            New to BURGLYF ?{" "}
            <Link className="text-[#FFBA00]" to="/signup">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
