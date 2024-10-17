import { Button } from "@/common/components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { Card, CardContent } from "@/common/components/shadcn/ui/card";
import { MoreVertical } from "lucide-react";
import { IWorkspace } from "../../types/overview.type";

function Workspace({ title, logoUrl }: IWorkspace) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={logoUrl} alt="Avatar" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">Videos: 0 Text: 1</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Workspace;
