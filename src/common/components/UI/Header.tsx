import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  showBrand?: boolean;
}

function Header({ showBrand = true }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      {showBrand && (
        <BrandLogo
          logoClassName="invert-0 !w-5 !h-5"
          textClassName="text-primary"
        />
      )}
      <Avatar className=" cursor-pointer w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>G</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Header;
