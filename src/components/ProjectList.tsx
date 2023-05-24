import React from "react";
import { projectsTypes } from "../assets/projects";

interface ProjectListProps {
  projects: projectsTypes;
}

type Props = Readonly<ProjectListProps>;

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="ProjectList">
      {projects.map((project) => (
        <img key={project.id} src={project.img} alt={project.category} />
      ))}
    </div>
  );
};

export default ProjectList;
