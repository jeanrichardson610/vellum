import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = { sm: "size-4", md: "size-6", lg: "size-8" } as const;

export function Spinner({ className, size = "md", label = "Loading", ...props }: SpinnerProps) {
  return (
    <svg
      role="status"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(sizeMap[size], "animate-spin text-primary-500", className)}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M22 12c0-5.523-4.477-10-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
