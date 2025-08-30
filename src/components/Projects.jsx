import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

function Projects() {
  return (
    <section className="section-style">
      <div>
        <h2 className="h2-style">Projects</h2>
        <div className="ml-3 h-[1px] border-0 bg-Primary w-[112px] md:w-[142px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <img src="./bookFinder-img.png" alt="Book finder app screenshot" />
        </div>
        <div>
          <h3 className="h3-style ">Book Finder</h3>
          <p className="p-style">
            Developed a book finder application that allows users to discover
            books they want to read and generate a personalized favorites list
            to share as recommendations with friends.
          </p>
          <ul className="grid grid-cols-3 my-6 gap-4">
            <FaHtml5 className="secondary-icon" />
            <FaReact className="secondary-icon" />
            <BiLogoTailwindCss className="secondary-icon" />
          </ul>
          <div className="flex flex-col gap-4  md:gap-10 md:flex-row">
            <a href="/" className="text-Secondary underline text-lg">
              View Project
            </a>
            <a href="/" className="text-Secondary underline text-lg">
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
