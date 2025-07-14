import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label
        className={cn(
          "relative inline-flex items-center cursor-pointer",
          "w-12 h-6 rounded-full bg-gray-700 transition-colors",
          checked ? "bg-purple-600" : "bg-gray-600",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
          props.disabled && "opacity-50 pointer-events-none",
          className
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only"
          ref={ref}
          {...props}
        />
        <span
          className={cn(
            "absolute w-4 h-4 bg-white rounded-full transition-transform",
            checked ? "translate-x-7" : "translate-x-1",
            "top-1"
          )}
        />
      </label>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };