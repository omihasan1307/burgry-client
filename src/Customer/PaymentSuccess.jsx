import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { id } = useParams();
  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-32 grid place-items-center text-center ">
      <div>
        <FontAwesomeIcon
          className="text-green-500 text-5xl my-5   "
          icon={faCircleCheck}
        />
        <h1 className="text-green-500 text-5xl font-bold  uppercase mb-5">
          Payment Successfull
        </h1>
        <p className="my-5 ">Transaction Number: {id}</p>
        <NavLink
          to="/"
          className="inline-block rounded-lg  py-2 uppercase bg-[#FFBA00] text-white px-4"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentSuccess;
