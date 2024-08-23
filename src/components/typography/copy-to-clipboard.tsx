"use client";
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { CopySuccessIcon } from "../animated-icon";


export function CopyableText({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLParagraphElement>) {
    const [hasCopied, setHasCopied] = useState(false);

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(children as string);
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
            toast({
                title: "Copied!",
                description: children as string,
                variant: "default",
                icon: <CopySuccessIcon />,
            })
        } catch (err) {
            console.error('Failed to copy: ', err);
        }        
    }
    return <div className="flex items-center">
    <p
    className={className}
    {...props}>{children}
    </p>
    <Tooltip>
    <TooltipTrigger asChild>
    <Button size='icon' variant={hasCopied?'success':'ghost'} className="ml-1 h-auto w-auto p-1.5" onClick={copyToClipboard}>
        {hasCopied ? <Check className="md:size-5 size-4" /> : <Copy className="md:size-5 size-4" />}
    </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Copy!</p>
    </TooltipContent>
  </Tooltip>
    </div>
    ;
}