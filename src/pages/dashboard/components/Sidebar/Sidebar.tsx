import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/common/components/shadcn/ui/sheet";
import { useDeviceType } from "@/common/hooks/useDeviceType";
import SidebarContent from "./components/SidebarContent";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import BrandLogo from "@/common/components/UI/BrandLogo";

function Sidebar() {
  const deviceType = useDeviceType();

  if (deviceType === "desktop") {
    return (
      <div className="h-full w-80 p-5 flex flex-col gap-2 ">
        <BrandLogo
          logoClassName="invert-0 !w-5 !h-5"
          textClassName="text-primary"
        />
        <SidebarContent />
      </div>
    );
  }
  return (
    <Sheet>
      <SheetTrigger className="p-5">
        <HamburgerMenuIcon className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">
            <BrandLogo
              logoClassName="invert-0 !w-5 !h-5"
              textClassName="text-primary"
            />
          </SheetTitle>
          <SheetDescription>
            <SidebarContent />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
