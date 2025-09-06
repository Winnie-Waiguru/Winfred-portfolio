import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <>
      <h1>Project Details Page</h1>
    </>
  );
}

export default ProjectDetails;
