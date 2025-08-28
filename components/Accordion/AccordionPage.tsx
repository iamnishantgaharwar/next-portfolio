"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import WorkExp from "../Content/WorkExp";
import FreeLanceWork from "../Content/FreeLanceWork";
import Projects from "../Content/Projects";
import Skills from "../Content/Skills";
import Education from "../Content/Education";
const AccordionPage = () => {
  return (
    <Accordion type="single" collapsible className="w-full pr-0 sm:pr-4 ">
      <AccordionItem value="work-experience" className="px-4">
        <AccordionTrigger className="text-xl font-bold">
          💼 Work Experience
        </AccordionTrigger>
        <AccordionContent>
          <WorkExp />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="freelance" className="px-4">
        <AccordionTrigger className="text-xl font-bold">
          🛠 Freelance Work
        </AccordionTrigger>
        <AccordionContent>
          <FreeLanceWork />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="projects" className="px-4">
        <AccordionTrigger className="text-xl font-bold">
          🚀 Projects
        </AccordionTrigger>
        <AccordionContent>
          <Projects />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="skills" className="px-4">
        <AccordionTrigger className="text-xl font-bold">
          🧰 Technical Skills
        </AccordionTrigger>
        <AccordionContent>
          <Skills />  
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="education" className="px-4">
        <AccordionTrigger className="text-xl font-bold">
          🎓 Education
        </AccordionTrigger>
        <AccordionContent>
          <Education />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionPage;
