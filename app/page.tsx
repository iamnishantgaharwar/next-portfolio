"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import Footer from "./Footer/page";
const resume = "/nishantgaharwar.pdf";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      <main className="flex flex-grow flex-col sm:flex-row">
        <nav className="flex m-4">
          <ul className="space-y-2 border-b-1 sm:border-b-0 sm:border-r-1 w-full sm:min-h-64 sm:pr-4 flex sm:flex-col justify-around sm:justify-start gap-4 sm:gap-0 py-2 sm:py-0">
            <li className="flex items-center ">
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-amber-200 after:transition-all after:duration-300 hover:after:w-full">
                <a href={resume}>resume</a>
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-amber-200 after:transition-all after:duration-300 hover:after:w-full">
                <a href="https://www.linkedin.com/in/iamnishantgaharwar/" target="_blank" rel="noopener noreferrer"> linkedin</a>
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-amber-200 after:transition-all after:duration-300 hover:after:w-full">
                <a href="https://github.com/iamnishantgaharwar" target="_blank" rel="noopener noreferrer"> github</a>
              </span>
            </li>
          </ul>
        </nav>
        <section className="flex flex-col my-4 mx-4 sm:mx-0">
          <h1 className="text-xl font-bold ml-4">Nishant Gaharwar</h1>
          <h2 className="text-xl font-bold ml-4 mt-4">👋 About Me</h2>
          <p className="ml-4 space-y-2 mt-4">
            <span className="text-[1.05rem] md:w-3/4 sm:w-full block leading-relaxed">
              I&apos;m a Software Engineer with 1.5+ years of experience crafting
              scalable, high-performance web applications using TypeScript and
              React. I&apos;m passionate about solving real-world problems, improving
              system efficiency, and contributing to meaningful projects.
            </span>
            <span className="text-[1.05rem] md:w-3/4 sm:w-full block leading-relaxed">
              I&apos;pride myself on being a fast learner who thrives on adapting to
              new technologies and enhancing technical and analytical
              capabilities. I approach development with logic, structure, and a
              strong focus on performance and maintainability.
            </span>
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="work-experience" className="px-4">
              <AccordionTrigger className="text-xl font-bold">
                💼 Work Experience
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Software Engineer — Eduberance (Remote)
                    </h3>
                    <p className="text-sm text-gray-500">
                      Dec 2023 – Present | Ahmedabad, Gujarat
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Built and maintained a React-based EdTech SaaS platform.
                      </li>
                      <li>
                        Integrated OpenAI & Gemini APIs for AI-powered career
                        guidance and psychometric reports.
                      </li>
                      <li>
                        Developed dynamic PDF generation, AI-based content
                        creation, and optimized frontend performance (30% faster
                        load times).
                      </li>
                      <li>
                        Automated Azure deployments for CI/CD on the master
                        branch.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      🔧 Relay Project @ Eduberance
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Set up complete frontend architecture with React,
                        TypeScript, Tailwind, and ShadCN.
                      </li>
                      <li>
                        Built Google Slides & PDF generation services using
                        Node.js.
                      </li>
                      <li>
                        Developed an admin dashboard from scratch to manage
                        platform functionalities.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Trainee Application Developer — Dynatech Systems (On-site)
                    </h3>
                    <p className="text-sm text-gray-500">
                      Jan 2023 – May 2023 | Ahmedabad, Gujarat
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Contributed to Microsoft Dynamics 365 F&O solutions
                        using X++.
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="freelance" className="px-4">
              <AccordionTrigger className="text-xl font-bold">
                🛠 Freelance Work
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Gig 1 – 3D Interactive Landing Page
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Built a modern landing page with GSAP animations and
                        Three.js-powered 3D models.
                      </li>
                      <li>
                        Focused on rendering optimization and responsiveness.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Gig 2 – Figma to Functional
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Translated Figma designs into a responsive landing page
                        using React and Tailwind CSS.
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="projects" className="px-4" >
              <AccordionTrigger className="text-xl font-bold">
                🚀 Projects
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      SuperDocx – PDF Generation Service
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Created a backend tool enabling Tailwind CSS-based
                        styling in the frontend.
                      </li>
                      <li>
                        Built and published an NPM package for integration with
                        React.
                      </li>
                      <li>
                        Designed a tiered subscription system with token-based
                        PDF generation, secure API access, and rate limiting.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Normalizer – JSON Data Processor
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Built a utility tool to flatten complex JSON structures,
                        simplifying data handling and transformations.
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="px-4">
              <AccordionTrigger className="text-xl font-bold">
                🧰 Technical Skills
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Frontend</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Backend</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Prisma</li>
                      <li>Python FastAPI</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tools & Libraries</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Playwright</li>
                      <li>Zod</li>
                      <li>GSAP</li>
                      <li>THREE.js</li>
                      <li>Redux</li>
                      <li>React-Hook-Form</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Other</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>API Design</li>
                      <li>Performance Optimization</li>
                      <li>Git</li>
                      <li>Beginner-level C++ & Java</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="px-4">
              <AccordionTrigger className="text-xl font-bold">
                🎓 Education
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      B.E. in Information and Communication Technology
                    </h3>
                    <p className="text-sm text-gray-500">
                      L.J. Institute of Engineering, 2023
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Diploma in Computer Engineering
                    </h3>
                    <p className="text-sm text-gray-500">
                      L.J. Institute of Engineering, 2020
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </motion.div>
  );
}
