import Avatar from "./Avatar";
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
      <Avatar />
    </div>
  );
}

export default Header;
