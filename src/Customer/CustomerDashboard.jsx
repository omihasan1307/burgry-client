import useTitle from "../hooks/UseTitle";
import Dashboard from "../pages/Home/Dashboard";

const CustomerDashboard = () => {
  useTitle("CUSTOMER-DASHBOARD");
  return (
    <div>
      <div className="bg-yellow-400 py-32 text-white">
        <h1 className="text-center text-5xl font-bold">Customer</h1>
      </div>
      <Dashboard />
    </div>
  );
};

export default CustomerDashboard;
