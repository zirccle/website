import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "lavender"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "border-transparent bg-primary text-on-primary shadow hover:bg-primary-container/90",
    secondary: "border-transparent bg-secondary text-on-secondary hover:bg-secondary/80",
    destructive: "border-transparent bg-error text-white shadow hover:bg-error/80",
    outline: "text-on-background border border-outline",
    lavender: "border-outline-variant bg-primary-fixed-dim/20 text-primary-container hover:bg-primary-fixed-dim/30 shadow-sm",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wider transition-colors uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
