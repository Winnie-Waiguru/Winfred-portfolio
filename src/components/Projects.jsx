import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="section-style"
      aria-labelledby="projects-title"
    >
      <div>
        <h2 id="projects-title" className="h2-style">
          Projects
        </h2>
        <div className="ml-3 h-[1px] border-0 bg-Primary w-[112px] md:w-[142px]"></div>
      </div>
      <div>
        {projects.map((project) => {
          const Icon = project.stack;
          return (
            <article key={project.id} className="project-container">
              <div className=" mt-4 md:mt-10">
                <img
                  src={project.image.alternate}
                  alt={`Screenshot of ${project.title} application`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full md:w-4/5 h-auto"
                  srcSet={`${project.image.small} 480w, ${project.image.medium} 800w`}
                  sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 800px"
                />
              </div>
              <div>
                <h3 className="h3-style ">{project.title}</h3>
                <p className="p-style">{project.description}</p>
                <ul
                  className="grid grid-cols-3 my-6 gap-4"
                  aria-label="technologies used"
                >
                  {project.stack.map((Icon, index) => (
                    <li key={index}>
                      <Icon className="secondary-icon" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
                <nav aria-label={`${project.title} project link`}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="focus-element view-link"
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project
                  </Link>
                </nav>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
