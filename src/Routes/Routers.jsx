import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import Login from "../Authintication/Login";
import Register from "../Authintication/Register";
import Profile from "../Admin/Profile";
import ManageUsers from "../Admin/ManageUsers";
import CustomerDashboard from "../Customer/CustomerDashboard";
import AdminDashboard from "../Admin/AdminDashboard";
import AddItems from "../Admin/AddItems";
import ManageItems from "../Admin/ManageItems";
import EditItems from "../Admin/EditItems";
import MenuDetails from "../pages/Menu/MenuDetails";
import MyCart from "../Customer/MyCart";
import PrivateRoute from "./PrivateRoute";
import ShippingCart from "../Customer/ShippingCart";
import NotFound from "../shared/NotFound";
import PaymentSuccess from "../Customer/PaymentSuccess";
import MyOrder from "../Customer/MyOrder";
import ManageOrders from "../Admin/ManageOrders";
import AdminPrivateRoute from "./AdminPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },

      {
        path: "customerDashboard",
        element: (
          <PrivateRoute>
            <CustomerDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "cart",
            element: <MyCart />,
          },
          {
            path: "shippingInfo",
            element: <ShippingCart />,
          },
          {
            path: "order",
            element: <MyOrder />,
          },
        ],
      },
      {
        path: "adminDashboard",
        element: (
          <AdminPrivateRoute>
            <AdminDashboard />
          </AdminPrivateRoute>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "users",
            element: <ManageUsers />,
          },
          {
            path: "addItems",
            element: <AddItems />,
          },
          {
            path: "items",
            element: <ManageItems />,
          },
          {
            path: "orders",
            element: <ManageOrders />,
          },

          {
            path: "update/:id",
            element: <EditItems />,
          },
        ],
      },

      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menuDetails/:id",
        element: <MenuDetails />,
      },
      {
        path: "paymentSuccess/:id",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
