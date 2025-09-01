import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "./bookFinder-img.png",
      title: "Book Finder",
      description:
        "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
      stack: [FaHtml5, FaReact, BiLogoTailwindCss],
      projectUrl: "/",
      githubUrl: "https://github.com/Winnie-Waiguru/bookFinder-app.git",
    },
    {
      id: 2,
      image: "./meal-health-app.png",
      title: "Meal Health App",
      description:
        "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
      stack: [FaHtml5, FaReact, BiLogoTailwindCss, DiJavascript1],
      projectUrl: "/",
      githubUrl: "https://github.com/Winnie-Waiguru/bookFinder-app.git",
    },
    {
      id: 3,
      image: "./savannah -clone.png",
      title: "Savannah Clone",
      description:
        "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
      stack: [FaHtml5, FaReact, DiJavascript1],
      projectUrl: "/",
      githubUrl: "https://github.com/Winnie-Waiguru/bookFinder-app.git",
    },
  ];
  return (
    <section className="section-style">
      <div>
        <h2 className="h2-style">Projects</h2>
        <div className="ml-3 h-[1px] border-0 bg-Primary w-[112px] md:w-[142px]"></div>
      </div>
      <ul>
        {projects.map((project) => {
          const Icon = project.stack;
          return (
            <li
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
            >
              <div className=" mt-4 md:mt-10">
                <img src={project.image} alt={project.title} />
              </div>
              <div>
                <h3 className="h3-style ">{project.title}</h3>
                <p className="p-style">{project.description}</p>
                <ul className="grid grid-cols-3 my-6 gap-4">
                  {project.stack.map((Icon, index) => (
                    <li key={index}>
                      <Icon className="secondary-icon" />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4  md:gap-10 md:flex-row">
                  <a
                    href={project.projectUrl}
                    className="text-Secondary underline text-base md:text-lg"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-Secondary underline text-base md:text-lg"
                  >
                    View GitHub Repo
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
