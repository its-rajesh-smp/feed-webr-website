import BrandLogo from "@/common/components/UI/BrandLogo";

function AuthLeftSideWindow() {
  return (
    <div className="w-1/2 relative h-full bg-primary p-5 md:block  hidden ">
      <BrandLogo />
      <div className="text-white absolute top-0 left-0 w-full h-full   flex-col flex justify-center items-center ">
        <h1 className="text-5xl font-bold">Practice</h1>
        <h1 className="mt-1 mb-0.5">is the best way to</h1>
        <h2 className="text-5xl font-bold">learn.</h2>
      </div>
    </div>
  );
}

export default AuthLeftSideWindow;
