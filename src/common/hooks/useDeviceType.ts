import { useMediaQuery } from "react-responsive";
import { DeviceType } from "../types/others.type";

/**
 * Determines the device type based on the screen width
 * @returns The type of device as a string: "mobile", "tablet", or "desktop"
 */
export const useDeviceType = (): DeviceType => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop"; // Defaults to desktop if none of the above match
};
