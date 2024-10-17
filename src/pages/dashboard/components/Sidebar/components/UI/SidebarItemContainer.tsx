import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/common/components/shadcn/ui/accordion";
import React from "react";
import SidebarMenuOption from "./SidebarMenuOption";

function SidebarMenu({ name, path, icon, options }: any) {
  return (
    <AccordionItem value={path} className="w-full">
      <AccordionTrigger className="flex   text-base  font-bold h-10 gap-2 w-full items-center hover:text-black ">
        <div className="flex gap-2 w-full items-center ">
          {React.cloneElement(icon, { className: "h-5 w-5" })}
          <p>{name}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className={`ml-2  text-base `}>
        {Object.values(options).map((option: any) => (
          <SidebarMenuOption key={option.name} {...option} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default SidebarMenu;
