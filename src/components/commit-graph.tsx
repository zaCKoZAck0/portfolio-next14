import { Tooltip } from "@radix-ui/react-tooltip";
import React, { useMemo } from "react";
import {ContributionCalendar} from '~/data/github-data'

import { cn } from "~/lib/utils";
import { TooltipContent, TooltipTrigger } from "./ui/tooltip";

type CommitGraphProps = {
  contributions: ContributionCalendar["weeks"];
}

const getColor = (count: number): string => {
  const colors: { [key: number]: string } = {
    0: "bg-gray-700",
    1: "bg-orange-100",
    2: "bg-orange-200",
  };
  return colors[count] ?? "bg-orange-300";
};
export function CommitGraph({contributions}: CommitGraphProps) {
  const commitsData = useMemo(() => {
    return contributions.map(week => 
      week.contributionDays.map(day => day.contributionCount)
  );}
    , [contributions]);

    const commitsDateData = useMemo(() => {
      return contributions.map(week => 
        week.contributionDays.map(day => day.date)
    );
    }, [contributions]);
  return (
    <section>
      <div className="flex flex-col items-center justify-center border-2 border-primary/50 py-3">
        <div id="contributions" className="flex gap-1">
          {commitsData.map((week, i) => (
            <div
              key={`week-${i}`}
              id={`week-${i}`}
              className={cn("flex flex-col gap-1", i < 20 ? "hidden md:flex" : "flex")}
            >
              {week.map((commitCount, j) => (
                <Tooltip>
                  <TooltipTrigger asChild>
                  <div
                  key={`week-${i}-day-${j}`}
                  id={`week-${i}-day-${j}`}
                  className={cn(
                    "h-1 w-1 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5",
                    getColor(commitCount),
                  )}
                />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-sm">
                {commitCount} Contribution{commitCount === 1 ? "" : "s"} on{" "}
                {new Date(commitsDateData[i][j]).toLocaleDateString()}
              </div>
            </TooltipContent>
                </Tooltip>
          ))}
        </div>
          ))}
      </div>
    </div>
    </section>
  );  

}
