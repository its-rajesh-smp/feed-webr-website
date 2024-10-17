import React from "react";

function SidebarMenuOption({ name, icon }: any) {
  return (
    <div className="flex hover:bg-zinc-100 rounded-md gap-2 w-full items-center hover:text-black pl-2 h-8 cursor-pointer">
      {React.cloneElement(icon, { className: "h-4 w-4" })}
      <p>{name}</p>
    </div>
  );
}

export default SidebarMenuOption;
