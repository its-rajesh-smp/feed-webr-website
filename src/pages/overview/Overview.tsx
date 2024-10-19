import Header from "@/common/components/UI/Header";
import PageContainer from "@/common/components/UI/PageContainer";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useQuery } from "@apollo/client";
import OverviewCardsContainer from "./components/OverviewCardsContainer";
import CreateWorkspace from "./components/UI/CreateWorkspace";
import SearchWorkspace from "./components/UI/SearchWorkspace";
import WorkspacesContainer from "./components/WorkspacesContainer";
import { setWorkspaces } from "./reducers/workspaceReducer";
import { GET_WORKSPACES } from "./services/overview.gql";
import { WorkspaceCreatorContextProvider } from "./context/WorkspaceCreatorContext";

function Overview() {
  const dispatch = useAppDispatch();

  useQuery(GET_WORKSPACES, {
    onCompleted: (response) => {
      console.log(response);
      dispatch(setWorkspaces(response?.workspaces));
    },
  });

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
