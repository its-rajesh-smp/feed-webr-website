import PageContainer from "@/common/components/UI/PageContainer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <PageContainer className="flex gap-5 lg:flex-row flex-col">
      <Sidebar />
      <Outlet />
    </PageContainer>
  );
}

export default Dashboard;
