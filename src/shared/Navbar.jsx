import { NavLink } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import { CUSTOMER } from "../utilities/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useUserCart from "../hooks/useUserCart";

const Navbar = () => {
  const { user, role } = useMyContext();
  const [cartItem, refetch, isLoading] = useUserCart();

  const totalValue = cartItem?.reduce(
    (accumulator, item) => {
      const itemTotal = item.orderQuantity * item.price;
      accumulator.totalQuantity += item.orderQuantity;
      accumulator.totalPrice += itemTotal;
      accumulator.totalShipping += itemTotal * 0.05; // 5% shipping cost
      return accumulator;
    },
    { totalQuantity: 0, totalPrice: 0, totalShipping: 0 }
  );

  const active = "text-[#FFBA00] px-4 py-2 rounded inline-block w-full ";
  const inActive = "px-4 py-2 rounded inline-block w-full hover:text-[#FFBA00]";

  const navItem = (
    <div className="lg:text-white lg:flex items-center ">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Contact Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to={
              role === CUSTOMER
                ? "/customerDashboard/profile"
                : "/adminDashboard/profile"
            }
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {user && (
        <NavLink to="/customerDashboard/cart">
          {role === CUSTOMER && (
            <li className="px-4">
              <FontAwesomeIcon icon={faBagShopping} />
              <sup className="text-yellow-500">
                ({totalValue?.totalQuantity})
              </sup>
            </li>
          )}
        </NavLink>
      )}

      {user ? (
        <li>
          <span
            className=" text-yellow-500 px-4 tooltip tooltip-bottom"
            data-tip={user?.displayName}
          >
            {user?.displayName?.length > 10
              ? user?.displayName.slice(0, 10) + "..."
              : user?.displayName}
          </span>
        </li>
      ) : (
        <li className="lg:bg-[#FFBA00] hover:text-[#FFBA00] lg:text-black hover:bg-black hover:shadow-2xl rounded hover:scale-105 duration-300 hover:duration-300 ">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            <span className="text-black hover:text-[#FFBA00] ">Log In</span>
          </NavLink>
        </li>
      )}
    </div>
  );

  return (
    <div className="max-w-screen-xl  mx-auto">
      <div className="navbar justify-between">
        <div className=" ">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn lg:hidden  bg-[#FFBA00] text-black me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 p-2 shadow text-white  bg-slate-800 rounded-box w-52  "
            >
              {navItem}
            </ul>
          </div>
          <a className="normal-case text-xl text-white  ">
            <div className="lg:mx-4 flex items-center font-bold">
              <p className=" text-4xl">
                BURG<span className="text-[#FFBA00]">LYF</span>
              </p>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul>{navItem}</ul>
        </div>
        <div className="lg:hidden navbar-end ">
          <NavLink
            to="/login"
            className="btn uppercase bg-[#FFBA00] text-black"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
