import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { logout } from "@/store/slices/authUserSlice";
import { BiLogOut } from "react-icons/bi";
import { Button } from "../shadcn/button";
import { Separator } from "../shadcn/ui/separator";
import Avatar from "./Avatar";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  showBrand?: boolean;
}

function Header({ showBrand = true }: HeaderProps) {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.authUserReducer);

  /**
   * Logout the user and remove the token from local storage
   */
  const onLogoClick = () => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-between items-center">
      {showBrand && (
        <BrandLogo
          logoClassName="invert-0 !w-5 !h-5"
          textClassName="text-primary"
        />
      )}

      <Popover>
        <PopoverTrigger onClick={(e) => e.stopPropagation()}>
          <Avatar />
        </PopoverTrigger>
        <PopoverContent align="end" side="bottom" className="fit w-56   p-0">
          <div className="p-2 flex justify-center">
            <h3 className="text-center">Hi! {email}</h3>
          </div>
          <Separator />
          <div className="flex text-base flex-col gap-2">
            <Button
              icon={<BiLogOut className="text-base" />}
              className="justify-start gap-5"
              size="sm"
              variant="ghost"
              onClick={onLogoClick}
            >
              LogOut
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Header;
