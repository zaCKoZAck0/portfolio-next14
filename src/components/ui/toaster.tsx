"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "~/components/ui/toast"
import { useToast } from "~/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, icon, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div>
            {icon && icon}
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
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
