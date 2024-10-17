import { Accordion } from "@/common/components/shadcn/ui/accordion";
import SidebarMenus from "@/pages/dashboard/constants/sidebar.const";
import SidebarMenu from "./UI/SidebarItemContainer";

function SidebarContent() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion type="single" defaultValue="/inbox" collapsible>
        {Object.values(SidebarMenus).map((menu) => (
          <SidebarMenu key={menu.name} {...menu} />
        ))}
      </Accordion>
    </div>
  );
}

export default SidebarContent;
