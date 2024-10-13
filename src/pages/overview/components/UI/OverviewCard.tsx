import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import React from "react";

export interface OverviewCardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

function OverviewCard({ title, icon, children }: OverviewCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {React.cloneElement(icon, {
          className: "h-4 w-4 text-muted-foreground",
        })}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default OverviewCard;
