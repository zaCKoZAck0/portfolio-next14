import { cn } from "~/lib/utils";
import { Sora } from "next/font/google";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"


const sora = Sora({ subsets: ["latin"] });

export function H1({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h1
  className={cn(className,"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", sora.className)}
  {...props}>{children}</h1>;
}

export function H2({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h2
    className={cn(className,"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", sora.className)}
    {...props}>{children}</h2>;
  }

  export function H3({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h3
    className={cn(className,"scroll-m-20 text-2xl font-semibold tracking-tight", sora.className, className)}
    {...props}>{children}</h3>;
  }

  export function H4({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h4
    className={cn(className,"scroll-m-20 text-xl font-semibold tracking-tight", sora.className, className)}
    {...props}>{children}</h4>;
  }

  export function UL({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLUListElement>) {
    return <ul
    className={cn(className,"list-disc list-inside my-6 ml-6 [&>li]:mt-2", className)}
    {...props}>{children}</ul>;
  }

  export function P({
    children,
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLParagraphElement>) {
    return <p
    className={cn(className,"leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}>{children}</p>;
  }

  export {CopyableText} from "./copy-to-clipboard";