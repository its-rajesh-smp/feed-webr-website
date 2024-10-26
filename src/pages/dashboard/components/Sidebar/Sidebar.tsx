import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/common/components/shadcn/ui/sheet";
import BrandLogo from "@/common/components/UI/BrandLogo";
import Header from "@/common/components/UI/Header";
import { useDeviceType } from "@/common/hooks/useDeviceType";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SidebarContent from "./components/SidebarContent";

function Sidebar() {
  const deviceType = useDeviceType();

  if (deviceType === "desktop" || deviceType !== "tablet") {
    return (
      <div className="h-full w-80 flex flex-col gap-2   ">
        <Header />
        <SidebarContent />
      </div>
    );
  }
  return (
    <Sheet>
      <div className="flex items-center justify-between">
        <SheetTrigger>
          <HamburgerMenuIcon className="h-5 w-5" />
        </SheetTrigger>
        <Header showBrand={false} />
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">
            <BrandLogo
              logoClassName="invert-0 !w-5 !h-5"
              textClassName="text-primary"
            />
          </SheetTitle>
        </SheetHeader>
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
