import { useToast } from "./use-toast";
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription } from "./toast";

/** Mount this once near the root of the app (or a Storybook decorator). */
export function Toaster() {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
