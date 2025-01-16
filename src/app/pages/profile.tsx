"use client";


import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";
import Contacts from "../components/links";

const Profile = () => {
  return (
    <main className="w-full h-full min-h-[400px] sm:min-h-[600px] font-light border dark:border-neutral-900 shadow-custom dark:shadow-custom-dark flex flex-col justify-center items-center dark:bg-black p-8">
      <div className="text-center justify-items-center lg:px-10">
        <div className=" sm:flex justify-items-center">
          <Image
            src={profile}
            alt="Anthony Obiako"
            className="rounded-md border-2 border-black dark:border-white bg-white mb-4 w-40 saturate-150 h-60 object-cover mx-5"
          />
          <div className="cursor-default">
            <h1 className="text-lg md:text-4xl text-orange-200">
              Hi there! I&#39;m{" "}
              <span className="text-gradient font-semibold text-2xl md:text-5xl">
                Anthony Obiako
              </span>
            </h1>
            <p className="mt-4 md:text-4xl text-lg text-orange-50">
              I&#39;m a passionate <span className="font-semibold">Software Engineer</span>  dedicated to
              creating products that are both high-performing and visually
              stunning.
            </p>
            <p className="mt-2 text-lg md:text-3xl text-orange-50">
              Also a{" "}
              <span className="text-gradient">
                Frontend Web Developer, Vehicle Enthusiast, Avid Reader, Music
                Lover.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mb-6">
          <a
            href="/anthony-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 sm:px-4 bg-slate-50 text-black rounded-lg shadow hover:bg-slate-500 active:bg-cyan-400 active:text-white transition-all"
          >
            View Resume
          </a>
          <Link
            href="#contact"
            className="ml-4 px-2 py-2 sm:px-4 bg-slate-900 text-white rounded-lg shadow hover:bg-slate-700 active:bg-cyan-400 transition-all"
          >
            Contact Me
          </Link>
        </div>
        <Contacts main={true} />
      </div>
    </main>
  );
};

export default Profile;
