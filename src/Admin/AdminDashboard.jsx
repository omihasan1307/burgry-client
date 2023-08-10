import useTitle from "../hooks/UseTitle";
import Dashboard from "../pages/Home/Dashboard";

const AdminDashboard = () => {
  useTitle("ADMIN-DASHBOARD");
  return (
    <div>
      <div className="bg-yellow-400 py-32 text-white">
        <h1 className="text-center text-5xl font-bold">Admin</h1>
      </div>
      <Dashboard />
    </div>
  );
};

export default AdminDashboard;
