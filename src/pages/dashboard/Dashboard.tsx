import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
