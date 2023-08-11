import { NavLink, Outlet } from "react-router-dom";
import useMyContext from "../../hooks/useMyContext";

const Dashboard = () => {
  const { role } = useMyContext();

  const active =
    "bg-[#FFBA00] text-white px-4 py-2 rounded-full inline-block text-xs lg:text-base duration-500 ";
  const inActive =
    "px-4 py-2 rounded inline-block text-[#FFBA00]  lg:text-base text-xs duration-500";
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-10 rounded-full lg:w-fit bg-[#171717] flex items-center justify-center">
        {role === "customer" ? (
          <>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Profile
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              My Cart
            </NavLink>
            <NavLink
              to="order"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              My Order
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Profile
            </NavLink>
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Manage Users
            </NavLink>
            <NavLink
              to="addItems"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Add Items
            </NavLink>
            <NavLink
              to="items"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Manage Items
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? active : inActive)}
            >
              Manage Orders
            </NavLink>
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
