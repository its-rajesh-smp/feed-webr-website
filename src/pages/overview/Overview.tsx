import OverviewCardsContainer from "./components/OverviewCardsContainer";
import CreateWorkspace from "./components/UI/CreateWorkspace";
import SearchWorkspace from "./components/UI/SearchWorkspace";
import WorkspaceItemsContainer from "./components/WorkspaceItemsContainer";

function Overview() {
  return (
    <div>
      <div className="container mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold">Overview</h1>
        <OverviewCardsContainer />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Spaces</h2>
            <CreateWorkspace />
          </div>
          <SearchWorkspace />
        </div>

        <WorkspaceItemsContainer />
      </div>
    </div>
  );
}

export default Overview;
