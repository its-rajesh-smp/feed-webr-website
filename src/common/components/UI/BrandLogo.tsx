import { BRAND_IMAGE_ICON, BRAND_NAME } from "@/common/constants/app.const";

interface BrandLogoProps {
  logoClassName?: string;
  textClassName?: string;
}

function BrandLogo({ logoClassName, textClassName }: BrandLogoProps) {
  return (
    <div className="text-white flex items-center gap-4">
      <img
        className={`w-8 h-8 filter invert ${logoClassName}`}
        alt="logo"
        src={BRAND_IMAGE_ICON}
      />
      <p className={`font-bold ${textClassName}`}>{BRAND_NAME}</p>
    </div>
  );
}

export default BrandLogo;
