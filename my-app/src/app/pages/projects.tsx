import Image from "next/image";
import acme from "@/assets/acme-next.png";
import ExternalButton from "@/app/components/button";
import portfolio from "@/assets/portfolio.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-300 dark:border-neutral-900 shadow-custom dark:shadow-custom-dark rounded-2xl flex flex-col justify-center items-center bg-white dark:bg-black p-8"
    >
      <div className="justify-items-center mb-4 md:mb-16">
        <p className="text-lg md:text-xl lg:text-2xl text-teal-50">
          Browse My Recent
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-teal-200 md:mt-4">
          Projects
        </h1>
      </div>
      <div className="mt-6 lg:mt-10">
        <div className="px-3 py-5 sm:p-10 md border-2 border-solid border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] mb-8 md:mb-20 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
          <h1 className="text-center text-xl text-slate-100 mb-3 sm:mb-5 md:text-2xl md:font-medium">
            ACME Next-JS Admin Dashboard
          </h1>
          <Image src={acme} alt="acme dashboard" className="rounded-md mb-3" />
          <p className="mb-3 text-lg text-slate-100 md:text-xl">
            An intuitive admin dashboard for streamlined business operations,
            offering real-time insights into transactions and customer
            relationships for smarter decision-making.
          </p>
          <div className="w-full px-3 justify-around flex sm:max-w-[550px]">
            <ExternalButton href="https://nextjs-anthony-obiakos-projects-f8a7a599.vercel.app/">
              Live Preview
            </ExternalButton>
            <ExternalButton href="https://github.com/Anthony-obiako/nextjs">
              Code
            </ExternalButton>
          </div>
        </div>
        <div className="p-3 sm:p-10 border-2 border-solid border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] md:mb-16 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
          <h1 className="text-center text-xl text-slate-100 mb-3 sm:mb-5 md:text-2xl md:font-medium">
            This Website!
          </h1>
          <Image src={portfolio} alt="portfolio" className="rounded-md mb-3" />
          <p className="mb-3 text-lg text-slate-100 md:text-xl">
            A professional portfolio website presenting a brief introduction, my
            skills, experience, and projects—providing a clear snapshot of my
            expertise and achievements..
          </p>
          <div className="w-full px-3 justify-around flex sm:max-w-[550px]">
            <ExternalButton href="#about">Live Preview</ExternalButton>
            <ExternalButton href="https://github.com/Anthony-obiako/Portfolio">
              Code
            </ExternalButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
