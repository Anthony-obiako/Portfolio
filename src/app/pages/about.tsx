import Image from "next/image";
import about from "@/assets/about-pic.jpg";
import experience from "@/assets/experience.png";
import education from "@/assets/education.png";

const About = () => {
  return (
    <div id="about" className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-300 dark:border-neutral-900 shadow-custom dark:shadow-custom-dark rounded-2xl flex flex-col justify-center items-center dark:bg-black p-8">
      <div className="justify-items-center mb-4 md:mb-16">
        <p className="text-lg md:text-xl lg:text-2xl text-teal-50">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-teal-200 md:mt-4">About Me</h1>
      </div>
      <div className="justify-items-center sm:flex mt-6 lg:mt-10">
        <div className="max-w-[300px] h-full sm:min-w-[300px] sm:w-full mb-4 justify-items-center sm:mx-4">
          <Image
            src={about}
            alt="About picture"
            className="rounded-2xl grayscale "
          />
        </div>
        <div className="justify-items-center">
          <div className="flex flex-col gap-5 sm:flex-row items-center">
            <div className="border-2 border-solid border-teal-200 p-8 justify-items-center rounded-3xl text-center max-w-[300px] h-full sm:min-w-[300px text-sm md:text-lg cursor-default">
              <Image
                src={experience}
                alt="experience"
                width={30}
                className="rounded-lg bg-white"
              />
              <h1>Experience</h1>
              <p>2+ Years Frontend Development</p>
            </div>
            <div className="border-2 border-solid border-teal-200 p-8 justify-items-center rounded-3xl text-center max-w-[300px] h-full sm:min-w-[300px text-sm md:text-lg cursor-default">
              <Image
                src={education}
                alt="education"
                width={30}
                className="rounded-lg bg-white"
              />
              <h1>Education</h1>
              <p>B.Eng Electronics and Computer Engineering</p>
            </div>
          </div>
          <p className="text-center mt-3 text-teal-50 leading-relaxed italic sm:mx-4 md:mx-6 md:text-2xl lg:mx-10 lg:text-3xl cursor-default ">
            I&#39;m an <span className="font-bold">Electronics and Computer Engineering</span> graduate from
            Nnamdi Azikiwe University, Awka. With over two years of frontend
            development experience, I enjoy turning ideas into sleek, functional
            web experiences. Beyond code, I&#39;m all about clear communication,
            creative problem-solving, and collaborating with awesome teams to
            bring projects to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
