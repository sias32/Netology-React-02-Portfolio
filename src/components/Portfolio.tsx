import React, { useState } from "react";
import Toolbar from "./Toolbar";
import {
  filtersType,
  selectedType,
  onSelectFilterType,
} from "../types/Toolbar.types";
import ProjectList from "./ProjectList";
import projects, { projectsTypes } from "../assets/projects";

const Portfolio: React.FC = () => {
  const filters: filtersType = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelect] = useState<selectedType>(filters[0]);

  const onSelectFilter: onSelectFilterType = (event) => {
    setSelect(event.currentTarget.value);
  };

  const filterProjects = (): projectsTypes => {
    const filtered: projectsTypes = [];

    if (selected === filters[0]) {
      return projects;
    } else {
      projects.forEach((project) => {
        if (project.category === selected) {
          filtered.push(project);
        }
      });
    }

    return filtered;
  };

  const projectsFiltered = filterProjects();

  return (
    <>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={projectsFiltered} />
    </>
  );
};

export default Portfolio;
