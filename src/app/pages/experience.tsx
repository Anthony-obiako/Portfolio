import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-900 shadow-custom dark:shadow-custom-dark flex flex-col justify-center items-center dark:bg-black p-8"
    >
      <div className="justify-items-center mb-4 md:mb-16">
        <p className="text-lg md:text-xl lg:text-2xl text-teal-50">Explore</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-teal-200 md:mt-4">
          My Experience
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:gap-16 mt-6 lg:mt-10">
        <div className="p-8 rounded-xl shadow-inner shadow-teal-500 max-w-[1100px] h-full sm:min-w-[300px text-sm md:text-lg hover:shadow-lg hover:shadow-teal-500 cursor-default md:flex ">
          <p className="text-lg md:font-semibold md:mr-4 md:mt-3 md:min-w-[120px]">
            DEC 2024
          </p>
          <div>
            <h1 className="text-xl md:text-4xl font-extrabold border-b-2 md:border-b-4 border-white mb-3 md:mb-4 py-3">
              IMMUREG
            </h1>
            <p className="font-thin text-base md:text-xl">
              At Immureg, I enhanced patient autonomy and data management by
              developing a patient-friendly modal for generating Vaccination
              Tracking Numbers (VTNs) and updating vaccination history. This
              simplified process improved user experience, boosted patient
              engagement, and ensured secure, accurate record tracking, aligning
              with Immureg’s public health mission.
            </p>
            <div className="flex flex-wrap text-nowrap gap-2 mt-3">
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Typescript
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Next-JS
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                React-JS
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-xl shadow-inner shadow-teal-500 max-w-[1100px] h-full sm:min-w-[300px text-sm md:text-lg hover:shadow-lg hover:shadow-teal-500 cursor-default md:flex ">
          <p className="text-lg md:font-semibold md:mr-4 md:mt-3 md:min-w-[120px]">
            JUL 2023 - DEC 2024
          </p>
          <div>
            <h1 className="text-xl md:text-4xl font-extrabold border-b-2 md:border-b-4 border-white mb-3 md:mb-4 py-3">
              VETEK
            </h1>
            <p className="font-thin text-base md:text-xl">
              I collaborated closely with the frontend team to deliver
              refined user interfaces, resolve UI bugs, and elevate the overall
              user experience. Working alongside the lead senior developer, I
              contributed to building pixel-perfect, high-performance UI
              solutions that blend creativity with technical excellence.
            </p>
            <div className="flex flex-wrap text-nowrap gap-2 mt-3">
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                React-JS
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Javascript
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Git Version Control
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-xl shadow-inner shadow-teal-500 max-w-[1100px] h-full sm:min-w-[300px text-sm md:text-lg hover:shadow-lg hover:shadow-teal-500 cursor-default md:flex ">
          <p className="text-lg md:font-semibold md:mr-4 md:mt-3 md:min-w-[120px]">
            JUN 2022 - SEP 2023
          </p>
          <div>
            <h1 className="text-xl md:text-4xl font-extrabold border-b-2 md:border-b-4 border-white mb-3 md:mb-4 py-3">
              VICLYD INTERNET SERVICE LTD
            </h1>
            <p className="font-thin text-base md:text-xl">
              I worked in the technology department alongside the senior
              engineer, ensuring the delivery of seamless, reliable internet
              services to both customers and corporate offices, prioritizing
              efficiency and exceptional service quality
            </p>
            <div className="flex flex-wrap text-nowrap gap-2 mt-3">
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Html & CSS
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Javascript
              </div>
              <div className="px-2 py-1 bg-orange-200 rounded-md font-medium text-neutral-950">
                Node
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
