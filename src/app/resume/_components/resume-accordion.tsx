import { H3 } from "~/components/typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion"
import { AboutMe } from "./about-me";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Education } from "./education";
import { OpenSource } from "./open-source";
import { Suspense } from "react";
import { AccordionContentSkeleton } from "./skeleton/accordion-content";
  
export function ResumeAccordion(){
    return <div className="max-w-3xl w-full">
        <Accordion type="single" collapsible defaultValue="about-me">
  <AccordionItem value="about-me">
    <AccordionTrigger className="text-4xl hover:no-underline">
        <H3 className="md:text-4xl text-3xl">
        About Me
        </H3>
    </AccordionTrigger>
    <AccordionContent>
      <Suspense fallback={<AccordionContentSkeleton />}>
      <AboutMe />
      </Suspense>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="experience">
  <AccordionTrigger className="text-4xl hover:no-underline">
        <H3 className="md:text-4xl text-3xl">
        Experience
        </H3>
    </AccordionTrigger>
    <AccordionContent>
      <Suspense fallback={<AccordionContentSkeleton />}>
      <Experience />
      </Suspense>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="skills">
  <AccordionTrigger className="text-4xl hover:no-underline">
        <H3 className="md:text-4xl text-3xl">
        Skills
        </H3>
    </AccordionTrigger>
    <AccordionContent>
      <Suspense fallback={<AccordionContentSkeleton />}>
      <Skills />
      </Suspense>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="education">
  <AccordionTrigger className="text-4xl hover:no-underline">
        <H3 className="md:text-4xl text-3xl">
        Education
        </H3>
    </AccordionTrigger>
    <AccordionContent>
      <Suspense fallback={<AccordionContentSkeleton />}>
      <Education />
      </Suspense>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="open-source">
  <AccordionTrigger className="text-4xl hover:no-underline">
        <H3 className="md:text-4xl text-3xl">
        Open Source
        </H3>
    </AccordionTrigger>
    <AccordionContent>
      <Suspense fallback={<AccordionContentSkeleton />}>
      <OpenSource />
      </Suspense>
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
}