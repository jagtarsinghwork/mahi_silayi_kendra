import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
          "disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-purple-600 text-white hover:bg-purple-700",
          variant === "ghost" && "hover:bg-gray-800 hover:text-white",
          variant === "outline" && "border border-gray-700 hover:bg-gray-800",
          variant === "link" && "text-purple-500 hover:underline",
          size === "default" && "h-10 py-2 px-4",
          size === "sm" && "h-9 px-3 rounded-md",
          size === "lg" && "h-11 px-8 rounded-md",
          size === "icon" && "h-10 w-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }