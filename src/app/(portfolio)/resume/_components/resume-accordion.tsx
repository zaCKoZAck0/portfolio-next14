import { H3 } from '~/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { AboutMe } from './about-me';
import { Experience } from './experience';
import { Skills } from './skills';
import { Education } from './education';
import { OpenSource } from './open-source';

export function ResumeAccordion() {
  return (
    <div className="w-full max-w-3xl">
      <Accordion type="single" collapsible defaultValue="about-me">
        <AccordionItem value="about-me">
          <AccordionTrigger className="text-4xl hover:no-underline">
            <H3 className="text-3xl md:text-4xl">About Me</H3>
          </AccordionTrigger>
          <AccordionContent>
            <AboutMe />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experience">
          <AccordionTrigger className="text-4xl hover:no-underline">
            <H3 className="text-3xl md:text-4xl">Experience</H3>
          </AccordionTrigger>
          <AccordionContent>
            <Experience />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger className="text-4xl hover:no-underline">
            <H3 className="text-3xl md:text-4xl">Skills</H3>
          </AccordionTrigger>
          <AccordionContent>
            <Skills />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="education">
          <AccordionTrigger className="text-4xl hover:no-underline">
            <H3 className="text-3xl md:text-4xl">Education</H3>
          </AccordionTrigger>
          <AccordionContent>
            <Education />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="open-source">
          <AccordionTrigger className="text-4xl hover:no-underline">
            <H3 className="text-3xl md:text-4xl">Open Source</H3>
          </AccordionTrigger>
          <AccordionContent>
            <OpenSource />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
