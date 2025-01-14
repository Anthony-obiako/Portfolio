import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-300 dark:border-neutral-900 shadow-custom dark:shadow-custom-dark rounded-2xl flex flex-col justify-center items-center bg-white dark:bg-black p-8"
    >
      <div className="justify-items-center mb-4 md:mb-16">
        <p className="text-lg md:text-xl lg:text-2xl text-teal-50">Browse My Recent</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-teal-200 md:mt-4">
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Projects;
