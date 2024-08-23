"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "~/lib/utils";
import { H4 } from "../typography";
import { Logo } from "./logo";
import { NavItem } from ".";
import { usePathname, useRouter } from "next/navigation";

interface TabProps {
  text: string;
  selected: boolean;
  url: string;
}

export default function NavTabs({ tabs }: { tabs: NavItem[] }) {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const matchedTab = tabs.find((tab) => tab.pathname === pathname);
    if (matchedTab) {
      setSelected(matchedTab.pathname);
    }
  }, [pathname, tabs]);

  return (
    <div className="md:flex flex-wrap items-center justify-center gap-2 bg-secondary rounded-full border-2 p-2 hidden">
      <Logo className="text-xl px-3" />
      {tabs.map((tab) => (
        <Tab text={tab.label} selected={selected === tab.pathname} url={tab.pathname} key={tab.label} />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, url }: TabProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url, {
        scroll: false,
      })} 
      className={cn(
        "relative rounded-full px-4 py-1 text-sm transition-all",
        selected ? "text-primary-foreground" : "text-secondary-foreground hover:font-bold"
      )}
    >
      <H4 className="relative z-50 min-w-20">{text}</H4>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-primary text-primary-foreground"
        />
      )}
    </button>
  );
};