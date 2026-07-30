import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckCircle2, X, XCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col gap-2 p-4 sm:max-w-[380px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

const toastVariants = cva(
  "relative flex w-full items-start gap-3 overflow-hidden rounded-[var(--radius-md)] border p-4 shadow-[var(--shadow-lg)] " +
    "data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out data-[swipe=end]:animate-toast-out",
  {
    variants: {
      variant: {
        default: "border-ink-100 bg-paper-0 text-ink-950",
        success: "border-success-500/20 bg-success-100 text-success-700",
        warning: "border-warning-500/20 bg-warning-100 text-warning-700",
        danger: "border-danger-500/20 bg-danger-100 text-danger-700",
        info: "border-primary-500/20 bg-primary-50 text-primary-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

const iconMap = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
  info: Info,
} as const;

export interface ToastRootProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

export const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastRootProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon = iconMap[variant ?? "default"];
    return (
      <ToastPrimitive.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props}>
        <Icon className="size-5 shrink-0" />
        <div className="flex-1 text-body-sm">{children}</div>
        <ToastPrimitive.Close className="rounded-[var(--radius-sm)] p-0.5 opacity-60 transition-opacity hover:opacity-100">
          <X className="size-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
    );
  }
);
Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn("text-body-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn("text-body-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = "ToastDescription";

export const ToastAction = ToastPrimitive.Action;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;
