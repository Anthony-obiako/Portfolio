import Contacts from "../components/links";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border border-neutral-900 shadow-custom dark:shadow-custom-dark flex flex-col justify-center items-center dark:bg-black p-8"
    >
      <div className="justify-items-center mb-4 md:mb-16">
        <p className="text-lg md:text-xl lg:text-2xl text-teal-50">
          Get In Touch
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-teal-200 md:mt-4">
          Contact Me
        </h1>
      </div>
      <div className="p-4">
        <Contacts main={false} />
      </div>
    </div>
  );
};

export default Contact;
