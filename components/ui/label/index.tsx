import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-sm font-medium text-gray-400",
          "hover:text-purple-400 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label };