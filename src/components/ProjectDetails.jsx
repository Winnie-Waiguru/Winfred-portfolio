import { FaArrowLeft } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  console.log(projectId);
  return (
    <section className="section-style">
      <div className="flex flex-col gap-2 font-Poppins">
        <div className="flex flex-row gap-10 mb-10 items-center">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft className="icon" />
          </button>
          <h1 className="text-3xl text-Secondary font-Playfair font-bold ">
            Book Finder
          </h1>
        </div>

        <img
          src="/bookFinder-img.png"
          alt="Book Finder screenshot"
          className="md:w-3/4 mx-auto"
        />
        <div className="flex flex-row justify-between my-6">
          <h4 className="text-Secondary underline text-base md:text-lg">
            Live View
          </h4>
          <h4 className="text-Secondary underline text-base md:text-lg">
            GitHub
          </h4>
        </div>

        <h3 className="h3-project-style">Overview</h3>
        <p className="p-style">
          The Book Tracker App is a personal reading assistant designed to help
          users keep track of books they’ve read, manage a list of books they
          want to read, store their favorites, and explore book recommendations.
          It’s built with **React** and designed with a clean, user-friendly
          interface.
        </p>
        <h3 className="h3-project-style">Tech Stack</h3>
        <ul>
          <li>**Frontend:** React, CSS (or Tailwind CSS)</li>
          <li>**Other Tools:** Git, GitHub, API</li>
        </ul>
        <h3 className="h3-project-style">Challenges & Solutions</h3>
        <p className="p-style">
          **Challenge:** Managing state across multiple components **Solution:**
          Implemented React Context API to handle global state more efficiently.
        </p>
        <h3 className="h3-project-style"> Learning & Takeaways</h3>
        <ul>
          <li>
            Improved knowledge of **React Hooks** and component architecture
          </li>
          <li>
            Learned how to create responsive layouts with
            **Flexbox/Grid/Tailwind**
          </li>
          <li>
            Strengthened problem-solving skills in debugging and state
            management
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProjectDetails;
