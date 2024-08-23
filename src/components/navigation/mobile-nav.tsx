"use client";
import { Menu, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "./logo";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "~/components/ui/sheet"
import { NavItem } from ".";
import { H3 } from "../typography";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import Link from "next/link";

export function MobileNav({tabs}: {tabs: NavItem[]}) {
    const pathname = usePathname();
    return (
        <div className="bg-secondary text-secondary-foreground flex md:hidden justify-between w-full items-center">
            <div>
                <Logo className="text-xl px-3" />
            </div>
            <Sheet>
  <SheetTrigger asChild>
    <Button variant='ghost' size='icon'>
        <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent>
   <ul>
         {tabs.map((tab, idx) => (
            <li key={idx} className="p-4">
                <Link href={tab.pathname}>
                <H3 className={cn("flex items-center gap-1",tab.pathname===pathname?"text-primary leading-relaxed":"text-muted-foreground")}>
                {tab.label}
                {tab.pathname===pathname && <span className="text-orange-200">
                    <Zap className="h-5 w-5" />
                    </span>}
                </H3>
                </Link>
            </li>
         ))}
   </ul>
  </SheetContent>
</Sheet>
        </div>
    )
}