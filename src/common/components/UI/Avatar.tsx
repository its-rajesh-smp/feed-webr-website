import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from "../shadcn/ui/avatar";

interface AvatarProps {
  containerClassName?: string;
}

function Avatar({ containerClassName = "" }: AvatarProps) {
  return (
    <div>
      <AvatarPrimitive
        className={`cursor-pointer w-8 h-8 ${containerClassName}`}
      >
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>G</AvatarFallback>
      </AvatarPrimitive>
    </div>
  );
}

export default Avatar;
