'use client';

import { Toast, ToastClose, ToastProvider, ToastTitle, ToastViewport } from '~/components/ui/toast';
import { useToast } from '~/components/ui/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, action, icon, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="relative">
              <span className="z-10">{icon && icon}</span>
              <div className="absolute top-0 scale-150 blur-lg">{icon && icon}</div>
            </div>
            <div className="w-10" />
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* {description && (
                <ToastDescription>{description}</ToastDescription>
              )} */}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
