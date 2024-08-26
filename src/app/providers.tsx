import {
    TooltipProvider,
  } from "~/components/ui/tooltip"
  import { Toaster } from "~/components/ui/toaster"
  import { Analytics } from '@vercel/analytics/react';
  import { SpeedInsights } from '@vercel/speed-insights/next';

export function Providers(
    {children}: {children: React.ReactNode}
){
    return <TooltipProvider>{children}
    <Toaster />
    <Analytics />
    <SpeedInsights />
    </TooltipProvider>
}