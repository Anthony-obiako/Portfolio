"use client";

import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

interface Prop {
  main: boolean;
}

const Contacts = ({ main }: Prop) => {
  if (main) {
    return (
      <div
        id="contact-bar-main"
        className="h-10 w-[180px] mx-auto mt-2 sm:mt-8 xs:mt-0 sm:m-0 flex justify-between items-center"
      >
        <a
          href="mailto:obiakoanthonygozie@gmail.com"
          target="_blank"
          aria-label="gmail link"
        >
          <BiLogoGmail className="size-7 sm:size-6" />
        </a>
        <a
          href="https://github.com/Anthony-obiako"
          target="_blank"
          aria-label="github link"
        >
          <FaGithub className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/obiako-anthony-3906a1251/"
          target="_blank"
          aria-label="linkedin link"
        >
          <FaLinkedin className="size-7 sm:size-6" />
        </a>
        <a
          href="https://open.spotify.com/user/31cxjbkfa2tidzheokqfa3cx6wq4"
          target="_blank"
          aria-label="spotify link"
        >
          <FaSpotify className="size-6" />
        </a>
      </div>
    );
  } else {
    return (
      <div
        id="contact-bar-footer"
        className="h-fit w-72 mx-auto sm:m-0 flex justify-between items-center"
      >
        <a
          href="mailto:obiakoanthonygozie@gmail.com"
          target="_blank"
          aria-label="gmail link"
        >
          <BiLogoGmail
            className="size-6"
            style={{ color: "#737373", opacity: "50%" }}
          />
        </a>
        <a
          href="https://github.com/Anthony-obiako"
          target="_blank"
          aria-label="github link"
        >
          <FaGithub
            className="size-5"
            style={{ color: "#737373", opacity: "50%" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/obiako-anthony-3906a1251/"
          target="_blank"
          aria-label="linkedin link"
        >
          <FaLinkedin
            className="size-5"
            style={{ color: "#737373", opacity: "50%" }}
          />
        </a>
        <a
          href="https://open.spotify.com/user/31cxjbkfa2tidzheokqfa3cx6wq4"
          target="_blank"
          aria-label="spotify link"
        >
          <FaSpotify
            className="size-5"
            style={{ color: "#737373", opacity: "50%" }}
          />
        </a>
      </div>
    );
  }
};

export default Contacts;
