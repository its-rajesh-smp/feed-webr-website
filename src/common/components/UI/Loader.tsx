import { SVGAttributes } from "react";
import { BiLoader } from "react-icons/bi";

function Loader(props: SVGAttributes<SVGElement>) {
  return (
    <BiLoader
      {...props}
      className={` animate-spin ${props.className}  text-primary `}
    />
  );
}

export default Loader;
