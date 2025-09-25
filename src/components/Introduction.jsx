import { FaGithub, FaLinkedin } from "react-icons/fa";

function Introduction() {
  return (
    <section
      id="introduction"
      className="section-style"
      aria-labelledby="introduction-title"
    >
      {/* <div
        style={{
          backgroundColor: "white",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%238A9BB5'/%3E%3Cstop offset='1' stop-color='%23FFF5EC'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23EA580C'/%3E%3Cstop offset='1' stop-color='%231F3A93'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") `,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh", // important so the div actually fills the screen
          width: "100%",
          position: "absolute",
        }}
      /> */}
      <div>
        <div className="flex flex-row gap-1">
          <picture>
            <source srcSet="./hand-wave.webp" type="image/webp" />
            <img
              className="w-[32px] h-[40px]"
              src="./hand-wave.png"
              alt="hand waving emoji"
              aria-hidden="true"
            />
          </picture>

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
          user-friendly websites. I bring designs to life through thoughtful
          code and a love for intuitive interfaces.
        </p>
        <p className="p-style">Find me on:</p>
        <div className=" flex flex-col md:flex-row gap-10 md:gap-20 p-style mt-6">
          <a
            href="https://www.linkedin.com/in/winfred-waiguru/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-element flex gap-1 view-link"
          >
            <FaLinkedin className="icon" aria-hidden="true" />
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/Winnie-Waiguru"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-element flex gap-1 view-link"
          >
            <FaGithub className="icon" aria-hidden="true" />
            GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
