import {
    TooltipProvider,
  } from "~/components/ui/tooltip"
  import { Toaster } from "~/components/ui/toaster"

export function Providers(
    {children}: {children: React.ReactNode}
){
    return <TooltipProvider>{children}
    <Toaster />
    </TooltipProvider>
}