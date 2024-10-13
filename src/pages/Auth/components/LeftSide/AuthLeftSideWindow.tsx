import BrandLogo from "@/common/components/UI/BrandLogo";
import { BRAND_IMAGE_ICON } from "@/common/constants/app.const";

function AuthLeftSideWindow() {
  return (
    <div className="w-1/2 relative h-full bg-primary p-5 md:block  hidden ">
      <BrandLogo />
      <div className="text-white absolute top-0 left-0 w-full h-full   flex-col flex justify-center items-center ">
        <h1 className=" md:text-4xl lg:text-5xl font-bold">Lineup reviews</h1>
        <h1 className="mt-1 mb-0.5">directly on your</h1>
        <h2 className="md:text-4xl lg:text-5xl font-bold">platform.</h2>
      </div>
      <img
        className="absolute bottom-0 right-0 invert opacity-[0.015]"
        src={BRAND_IMAGE_ICON}
      />
    </div>
  );
}

export default AuthLeftSideWindow;
