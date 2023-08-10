import { Link, useLocation, useNavigate } from "react-router-dom";
import burger from "../assets/payday2.png";
import { useForm } from "react-hook-form";
import useMyContext from "../hooks/useMyContext";
import axios from "axios";
import { useState } from "react";
import { CUSTOMER } from "../utilities/constant";
import useTitle from "../hooks/UseTitle";
const Register = () => {
  useTitle("REGISTRATION");
  const navigate = useNavigate();
  const location = useLocation();
  const [showError, SetShowError] = useState();
  const { createUser, updateUser } = useMyContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const from = location?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((result) => {
      updateUser(data?.name)
        .then(() => {
          axios
            .post(`https://burgry-server.vercel.app/users`, {
              userName: data?.name,
              userEmail: data?.email,
              userUID: result?.user?.uid,
              photoURL: null,
              role: CUSTOMER,
            })
            .then((res) => {
              if (res.data.insertedId) {
                reset();
                navigate(from, { replace: true });
                navigate(0);
              }
            });
        })
        .catch((err) => SetShowError(err));
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
            Please Register !
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="text-xl text-white my-5">Name </h2>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Your Name"
                className="px-4 py-2 bg-[#171717] rounded w-full "
              />
              {errors.name && (
                <span className="text-red-500">
                  This Name field is required
                </span>
              )}
            </div>
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
                  This Email field is required
                </span>
              )}
            </div>
            <div>
              <h2 className="text-xl text-white my-5">Password </h2>
              <input
                {...register("password", { required: true, minLength: 6 })}
                type="password"
                placeholder="Enter Your Password"
                className="px-4 py-2 bg-[#171717] rounded w-full"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">
                  This password field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">Password must be 6 digit</span>
              )}
            </div>
            {showError && <span className="text-red-500"> {showError} </span>}
            <button className="bg-[#FFBA00] text-xl  w-full mx-auto py-2 my-8 text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
              Login
            </button>
          </form>
          <p>
            Already an user ?{" "}
            <Link className="text-[#FFBA00]" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
