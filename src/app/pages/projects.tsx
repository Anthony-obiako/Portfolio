import Image from "next/image";
import acme from "@/assets/acme-next.png";
import spa from "@/assets/spa.png";
import userDirectory from "@/assets/user-directory.png";
import ExternalButton from "@/app/components/button";
import portfolio from "@/assets/portfolio.png";
import immureg from "@/assets/immureg-pic.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-900 shadow-custom dark:shadow-custom-dark flex flex-col justify-center items-center dark:bg-black p-8"
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
        <div className="px-3 py-5 sm:p-10 border-4 hover:border-solid border-dashed border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] mb-8 md:mb-20 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
          <h1 className="text-center text-xl text-slate-100 mb-3 sm:mb-5 md:text-2xl md:font-medium">
            User Directory Web App
          </h1>
          <Image
            src={userDirectory}
            alt="user directory web app"
            className="rounded-md mb-3"
          />
          <p className="mb-3 text-lg text-slate-100 md:text-xl">
            A user directory web app that allows users to search for and view
            profiles of individuals within an organization, enhancing internal
            communication and collaboration.
          </p>
          <div className="w-full px-3 justify-around flex sm:max-w-[550px]">
            <ExternalButton href="https://user-directory-project.vercel.app/">Live Preview</ExternalButton>
            <ExternalButton href="https://github.com/Anthony-obiako/user-directory-project">Code</ExternalButton>
          </div>
        </div>
        <div className="px-3 py-5 sm:p-10 border-4 hover:border-solid border-dashed border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] mb-8 md:mb-20 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
          <h1 className="text-center text-xl text-slate-100 mb-3 sm:mb-5 md:text-2xl md:font-medium">
            Wellness Spa Booking App
          </h1>
          <Image
            src={spa}
            alt="acme dashboard"
            className="rounded-md mb-3"
          />
          <p className="mb-3 text-lg text-slate-100 md:text-xl">
            A wellness spa booking app that allows users to easily schedule and
            manage appointments, enhancing customer experience and streamlining
            spa operations.
          </p>
          <div className="w-full px-3 justify-around flex sm:max-w-[550px]">
            <ExternalButton href="https://wellness-spa.vercel.app/">Live Preview</ExternalButton>
            <ExternalButton href="https://github.com/Anthony-obiako/Wellness-Spa">Code</ExternalButton>
          </div>
        </div>
        <div className="px-3 py-5 sm:p-10 border-4 hover:border-solid border-dashed border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] mb-8 md:mb-20 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
          <h1 className="text-center text-xl text-slate-100 mb-3 sm:mb-5 md:text-2xl md:font-medium">
            Health Care Service Modal
          </h1>
          <Image
            src={immureg}
            alt="acme dashboard"
            className="rounded-md mb-3"
          />
          <p className="mb-3 text-lg text-slate-100 md:text-xl">
            A self-service modal designed to help patients conveniently register
            and update their immunization records, promoting accessibility,
            boosting patient engagement, and simplifying immunization
            management.
          </p>
          <div className="w-full px-3 justify-around flex sm:max-w-[550px]">
            <ExternalButton href="">Live Preview</ExternalButton>
            <ExternalButton href="">Code</ExternalButton>
          </div>
        </div>
        <div className="px-3 py-5 sm:p-10 border-4 hover:border-solid border-dashed border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] mb-8 md:mb-20 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
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
        <div className="p-3 sm:p-10 border-4 hover:border-solid border-dashed border-gray-800 rounded-md bg-gray-950 justify-items-center max-w-[900px] md:mb-16 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
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
