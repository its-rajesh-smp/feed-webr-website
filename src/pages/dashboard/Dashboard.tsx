import PageContainer from "@/common/components/UI/PageContainer";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/UI/DashboardHeader";
import { useQuery } from "@apollo/client";
import GET_A_WORKSPACE from "./services/getWorkspace.gql";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { setCurrentWorkspace } from "./reducers/dashboard.reducer";
import DashboardLoader from "./components/UI/DashboardLoader";

function Dashboard() {
  const { workspaceId } = useParams();
  const dispatch = useAppDispatch();

  // get workspace
  const { loading } = useQuery(GET_A_WORKSPACE, {
    variables: { id: workspaceId },
    onCompleted: (data) => {
      const workspace = data?.workspace;
      dispatch(setCurrentWorkspace(workspace));
    },
  });

  // if loading return dashboard loader
  if (loading) {
    return <DashboardLoader />;
  }

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
