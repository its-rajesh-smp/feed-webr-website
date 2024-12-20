import { useAppSelector } from "@/common/hooks/useAppSelector";
import { BiWorld } from "react-icons/bi";
import { FcFeedback } from "react-icons/fc";
import OverviewCard from "./UI/OverviewCard";

function OverviewCardsContainer() {
  const { totalWorkspaces } = useAppSelector((state) => state.workspaceReducer);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <OverviewCard title="Feedbacks" icon={<FcFeedback />}>
        <div className="text-2xl font-bold">1</div>
      </OverviewCard>

      <OverviewCard title="Spaces" icon={<BiWorld />}>
        <div className="text-2xl font-bold">{totalWorkspaces}</div>
      </OverviewCard>
    </div>
  );
}

export default OverviewCardsContainer;
