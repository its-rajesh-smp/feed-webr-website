import PageContainer from "@/common/components/UI/PageContainer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/UI/DashboardHeader";

function Dashboard() {
  return (
    <PageContainer className="flex gap-5 lg:flex-row flex-col">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col gap-5">
        <DashboardHeader />
        <Outlet />
      </div>
    </PageContainer>
  );
}

export default Dashboard;
