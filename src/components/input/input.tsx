import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Marks the field invalid and switches border/ring to the danger token. */
  invalid?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, leadingIcon, trailingIcon, ...props }, ref) => {
    if (leadingIcon || trailingIcon) {
      return (
        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="pointer-events-none absolute left-3 flex text-ink-400 [&_svg]:size-4">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            aria-invalid={invalid || undefined}
            className={cn(
              "h-10 w-full rounded-[var(--radius-md)] border bg-paper-0 text-body-md text-ink-950",
              "placeholder:text-ink-400 transition-colors duration-[var(--duration-fast)]",
              "border-ink-200 hover:border-ink-400 focus-visible:border-primary-500",
              "disabled:cursor-not-allowed disabled:bg-paper-100 disabled:text-ink-400",
              invalid && "border-danger-500 focus-visible:border-danger-500",
              leadingIcon ? "pl-9" : "pl-3",
              trailingIcon ? "pr-9" : "pr-3",
              className
            )}
            {...props}
          />
          {trailingIcon && (
            <span className="pointer-events-none absolute right-3 flex text-ink-400 [&_svg]:size-4">
              {trailingIcon}
            </span>
          )}
        </div>
      );
    }
    return (
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "h-10 w-full rounded-[var(--radius-md)] border px-3 bg-paper-0 text-body-md text-ink-950",
          "placeholder:text-ink-400 transition-colors duration-[var(--duration-fast)]",
          "border-ink-200 hover:border-ink-400 focus-visible:border-primary-500",
          "disabled:cursor-not-allowed disabled:bg-paper-100 disabled:text-ink-400",
          invalid && "border-danger-500 focus-visible:border-danger-500",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
