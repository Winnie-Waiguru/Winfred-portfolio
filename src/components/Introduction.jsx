import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Introduction() {
  return (
    <section
      id="introduction"
      className="section-style"
      aria-labelledby="introduction-title"
    >
      <div className="flex flex-row gap-1">
        <img
          className="w-[32px] h-[40px]"
          src="./hand-wave.png"
          alt="hand waving"
        />
        <h1
          id="introduction-title"
          className="text-[2rem] md:text-5xl font-Playfair"
        >
          Hello, I am
          <span className="text-Accent font-bold  "> Winfred Waiguru.</span>
        </h1>
      </div>
      <h2 className="text-Accent text-3xl md:text-[2.5rem] mb-6 mt-4 font-light font-Playfair">
        Frontend Developer
      </h2>
      <p className="p-style mb-2 lg:w-3/4 ">
        I am based in Nairobi, Kenya. I build clean, responsive, and
        user-friendly websites. I bring designs to life through thoughtful code
        and a love for intuitive interfaces.
      </p>
      <p className="p-style">Find me on:</p>
      <div className=" flex flex-row gap-20 p-style mt-6">
        <a
          href="https://www.linkedin.com/in/winfred-waiguru/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/Winnie-Waiguru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 "
        >
          <FaGithub className="icon" />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Introduction;
