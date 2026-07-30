import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const alertVariants = cva("relative flex gap-3 rounded-[var(--radius-md)] border p-4", {
  variants: {
    variant: {
      default: "border-ink-100 bg-paper-0 text-ink-950",
      success: "border-success-500/20 bg-success-100 text-success-700",
      warning: "border-warning-500/20 bg-warning-100 text-warning-700",
      danger: "border-danger-500/20 bg-danger-100 text-danger-700",
      info: "border-primary-500/20 bg-primary-50 text-primary-600",
    },
  },
  defaultVariants: { variant: "default" },
});

const iconMap = { default: Info, success: CheckCircle2, warning: AlertTriangle, danger: XCircle, info: Info } as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant = "default", children, ...props }: AlertProps) {
  const Icon = iconMap[variant ?? "default"];
  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <Icon className="size-5 shrink-0" />
      <div className="text-body-sm [&_p]:leading-relaxed">{children}</div>
    </div>
  );
}

export const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 text-body-md font-semibold leading-none", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-body-sm opacity-90", className)} {...props} />
);
AlertDescription.displayName = "AlertDescription";
