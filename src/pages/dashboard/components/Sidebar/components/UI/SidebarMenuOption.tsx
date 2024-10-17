import getRoutePath from "@/common/utils/route.util";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function SidebarMenuOption({ name, icon, path }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    if (!params?.workspaceId) {
      return;
    }
    navigate(getRoutePath(path, { workspaceId: params.workspaceId }));
  };

  return (
    <div
      onClick={handleClick}
      className="flex hover:bg-zinc-100 rounded-md gap-2 w-full items-center hover:text-black pl-2 h-8 cursor-pointer"
    >
      {React.cloneElement(icon, { className: "h-4 w-4" })}
      <p>{name}</p>
    </div>
  );
}

export default SidebarMenuOption;
