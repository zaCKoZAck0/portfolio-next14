"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "~/lib/utils";
import { H4 } from "../typography";
import { Logo } from "./logo";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavTabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-secondary rounded-full border-2 p-2">
        <Logo className="text-xl px-3" />
      {tabs.map((tab) => (
        <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-full px-4 py-1 text-sm transition-all",
        selected ? "text-primary-foreground" : "text-secondary-foreground hover:font-bold",
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
