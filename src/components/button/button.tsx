import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-body font-medium select-none",
    "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-drafted)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary-solid)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--color-primary-solid-hover)] active:bg-[var(--color-primary-solid-active)]",
        secondary:
          "bg-paper-0 text-ink-950 border border-ink-200 shadow-[var(--shadow-sm)] hover:bg-paper-100 active:bg-paper-200",
        ghost: "bg-transparent text-ink-800 hover:bg-ink-100 active:bg-ink-200",
        ember: "bg-accent-500 text-white shadow-[var(--shadow-sm)] hover:bg-accent-600",
        danger: "bg-danger-500 text-white shadow-[var(--shadow-sm)] hover:bg-danger-700",
        link: "bg-transparent text-primary-600 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-body-sm rounded-[var(--radius-sm)]",
        md: "h-10 px-4 text-body-md rounded-[var(--radius-md)]",
        lg: "h-12 px-6 text-body-lg rounded-[var(--radius-md)]",
        icon: "h-10 w-10 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

/** Solid-fill variants whose foreground MUST stay white for contrast — see Button below. */
const SOLID_FOREGROUND_WHITE_VARIANTS = new Set(["primary", "ember", "danger"]);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the passed child element instead of a <button> (Radix Slot). */
  asChild?: boolean;
  /** Shows a spinner and disables the button. */
  loading?: boolean;
  /** Icon rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon rendered after the label. */
  trailingIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leadingIcon,
      trailingIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const resolvedVariant = variant ?? "primary";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          className,
          // Appended *after* className so tailwind-merge always resolves the
          // text-color conflict in favor of white on these variants — a
          // caller passing className="text-black" (or anything else) can't
          // accidentally regress contrast below the 4.5:1 AA minimum.
          SOLID_FOREGROUND_WHITE_VARIANTS.has(resolvedVariant) && "text-white"
        )}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          leadingIcon
        )}
        {children}
        {!loading && trailingIcon}
      </Comp>
    );
  }
);
Button.displayName = "Button";