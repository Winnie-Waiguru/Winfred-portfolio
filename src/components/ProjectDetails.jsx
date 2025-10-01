import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectData = projects.find(
    (project) => project.id === Number(projectId)
  );

  console.log(projectId);
  return (
    <section className="section-style" aria-labelledby="page-title">
      <div className="flex flex-col gap-2 font-Poppins">
        <div className="flex flex-row gap-10 mb-10 items-center">
          <button
            aria-label="Go back to previous page"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="icon focus-element " aria-hidden="true" />
          </button>
          <h1
            id="page-title"
            className="text-3xl text-Secondary font-Playfair font-bold "
          >
            {projectData.title}
          </h1>
        </div>

        <img
          src={projectData.image.alternate}
          alt="Book Finder project"
          className="md:w-2/3 mx-auto"
        />

        <div className="flex flex-row justify-between my-6">
          {projectData.deploymentUrl &&
          projectData.deploymentUrl.trim !== "" ? (
            <a
              href={projectData.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-Secondary underline text-base md:text-lg focus-element"
              aria-label="View live project"
            >
              Live View
            </a>
          ) : (
            <span>Deployment Link Coming Soon</span>
          )}

          <a
            href={projectData.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-Secondary underline text-base md:text-lg focus-element"
            aria-label="View live project"
          >
            GitHub
          </a>
        </div>

        <h2 className="h3-style">Overview</h2>
        <p className="p-style">{projectData.description}</p>
        <h2 className="h3-style">Tech Stack</h2>
        <ul className="p-style">
          {projectData.techStack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="h3-style">Takeaways</h2>
        <p className="p-style">{projectData.learnings}</p>
      </div>
    </section>
  );
}

export default ProjectDetails;
