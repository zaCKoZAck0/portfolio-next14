import { Tooltip } from "@radix-ui/react-tooltip";
import React, { useMemo } from "react";
import {ContributionCalendar} from '~/types/github-data'

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
      <div className="flex flex-col items-center justify-center overflow-x-auto border-2 p-2 border-primary/50 md:w-fit">
        <div id="contributions" className="flex gap-1 flex-shrink-0 overflow-x-auto w-full">
          {commitsData.map((week, i) => (
            <div
              key={`week-${i}`}
              id={`week-${i}`}
              className="flex flex-col flex-shrink-0 gap-1"
            >
              {week.map((commitCount, j) => (
                <Tooltip
                key={`week-${i}-day-${j}`}
                >
                  <TooltipTrigger asChild>
                  <div
                  id={`week-${i}-day-${j}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-[2px]",
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
