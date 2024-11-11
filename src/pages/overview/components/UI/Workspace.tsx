import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { Card, CardContent } from "@/common/components/shadcn/ui/card";
import getRoutePath from "@/common/utils/route.util";
import PRIVATE_ROUTE_PATHS from "@/routes/constants/privatePath.const";
import { useNavigate } from "react-router-dom";
import { IWorkspace } from "../../types/overview.type";

function Workspace({ title, logoUrl, id }: IWorkspace) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(
      getRoutePath(PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX, {
        workspaceId: id,
        inboxType: "all",
      })
    );
  };

  return (
    <Card className="cursor-pointer" onClick={onClickHandler}>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={logoUrl} alt="Avatar" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">Total feedbacks : 0</p>
          </div>
        </div>
        {/* TODO: Add button to remove the workspace */}
        {/* <WorkspaceAction /> */}
      </CardContent>
    </Card>
  );
}

export default Workspace;
