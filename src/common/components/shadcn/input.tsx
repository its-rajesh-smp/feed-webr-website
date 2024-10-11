import * as React from "react";

import { cn } from "@/common/lib/utils";
import { Eye } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    if (type === "password") {
      return (
        <div className="flex items-center h-9 rounded-md focus-visible:outline-none focus-within:ring-black focus-within:ring-1 focus-within:ring-ring outline-black  justify-center border border-input gap-2 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  disabled:cursor-not-allowed disabled:opacity-50">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className={cn(
              " h-full w-full outline-none placeholder:text-muted-foreground",
              className
            )}
            ref={ref}
            {...props}
          />
          <Eye
            onClick={(e: any) => {
              e.preventDefault();
              setIsPasswordVisible(!isPasswordVisible);
            }}
            className=" hover:opacity-100 cursor-pointer opacity-70 transition-all "
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
