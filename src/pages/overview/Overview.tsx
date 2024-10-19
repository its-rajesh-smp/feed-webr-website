import Header from "@/common/components/UI/Header";
import PageContainer from "@/common/components/UI/PageContainer";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect } from "react";
import { getWorkspacesAct } from "./actions/getWorkspaces.act";
import OverviewCardsContainer from "./components/OverviewCardsContainer";
import CreateWorkspace from "./components/UI/CreateWorkspace";
import SearchWorkspace from "./components/UI/SearchWorkspace";
import WorkspacesContainer from "./components/WorkspacesContainer";

function Overview() {
  const dispatch = useAppDispatch();

  // Get all workspaces
  useEffect(() => {
    dispatch(getWorkspacesAct());
  }, []);

  return (
    <PageContainer className="mx-auto space-y-8">
      <Header />
      <h1 className="text-3xl font-bold">Overview</h1>
      <OverviewCardsContainer />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Spaces</h2>
          <CreateWorkspace />
        </div>
        <SearchWorkspace />
      </div>

      <WorkspacesContainer />
    </PageContainer>
  );
}

export default Overview;
