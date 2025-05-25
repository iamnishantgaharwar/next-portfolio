"use client";
import Footer from "@/app/Footer/page";
import AccordionPage from "../Accordion/AccordionPage";
import { motion } from "motion/react";

const Home = () => {
  const resume = "/nishantgaharwar.pdf";
  return (
    <motion.div
      initial={{ opacity: 0.5, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col overflow-x-hidden relative"
    >
      <main className="flex flex-grow flex-col sm:flex-row">
        <nav className="flex m-4">
          <ul className="space-y-2 border-b-1 sm:border-b-0 sm:border-r-1 w-full sm:min-h-64 sm:pr-4 flex sm:flex-col justify-around sm:justify-start gap-4 sm:gap-0 py-2 sm:py-0">
            <li className="flex items-center ">
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                <a href={resume}>resume</a>
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                <a
                  href="https://www.linkedin.com/in/iamnishantgaharwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  linkedin
                </a>
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-base relative inline-block after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                <a
                  href="https://github.com/iamnishantgaharwar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  github
                </a>
              </span>
            </li>
          </ul>
        </nav>
        <section className="flex flex-col my-4 mx-4 sm:mx-0">
          <span className="relative inline-block w-fit">
            <span className="absolute top-0 left-0 -right-4 bottom-0 bg-green-300 -skew-y-1  rounded-sm"></span>
            <h1 className="text-xl font-bold ml-4 relative z-10 ">
              Nishant Gaharwar
            </h1>
          </span>
          <h2 className="text-xl font-bold ml-4 mt-4">👋🏽 About Me</h2>
          <p className="ml-4 space-y-2 mt-4">
            <span className="text-[1.05rem] md:w-3/4 sm:w-full block leading-relaxed">
              I&apos;m a Software Engineer with 1.5+ years of experience
              crafting scalable, high-performance web applications using
              TypeScript and React. I&apos;m passionate about solving real-world
              problems, improving system efficiency, and contributing to
              meaningful projects.
            </span>
            <span className="text-[1.05rem] md:w-3/4 sm:w-full block leading-relaxed">
              I&apos;pride myself on being a fast learner who thrives on
              adapting to new technologies and enhancing technical and
              analytical capabilities. I approach development with logic,
              structure, and a strong focus on performance and maintainability.
            </span>
          </p>
          <AccordionPage />
        </section>
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Home;
