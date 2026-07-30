import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "min-h-24 w-full rounded-[var(--radius-md)] border px-3 py-2 bg-paper-0 text-body-md text-ink-950",
        "placeholder:text-ink-400 transition-colors duration-[var(--duration-fast)]",
        "border-ink-200 hover:border-ink-400 focus-visible:border-primary-500",
        "disabled:cursor-not-allowed disabled:bg-paper-100 disabled:text-ink-400",
        invalid && "border-danger-500 focus-visible:border-danger-500",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
