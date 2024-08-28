import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";

type AProps = {
    children: React.ReactNode;
    className?: string;
    href: string;
}

export function A(
    {children, className, href} : AProps
){
    if(href.startsWith("/"))
        return (
            <Link href={href}>
                <p className={cn("link group", className)}>
                {children} <ArrowUpRight className="inline-block ml-1 size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </p>
            </Link>
        )
        else return (
            <a href={href} className={cn(className)} target="_blank" rel="noopener noreferrer">
                <p className={cn("link group text-nowrap overflow-hidden", className)}>
                {children} <ArrowUpRight className="inline-block ml-1 size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </p>
            </a>)
}