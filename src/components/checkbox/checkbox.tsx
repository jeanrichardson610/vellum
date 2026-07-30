"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-5 shrink-0 rounded-[calc(var(--radius-sm)-2px)] border border-ink-200 bg-paper-0",
      "transition-colors duration-[var(--duration-fast)]",
      "hover:border-ink-400",
      "data-[state=checked]:border-[var(--color-primary-solid)] data-[state=checked]:bg-[var(--color-primary-solid)]",
      "data-[state=indeterminate]:border-[var(--color-primary-solid)] data-[state=indeterminate]:bg-[var(--color-primary-solid)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
      {props.checked === "indeterminate" ? (
        <Minus className="size-3.5" strokeWidth={3} />
      ) : (
        <Check className="size-3.5" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";