import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project(project: any) {
  return (
    <div className="project--container">
      <img
        className="project--poster"
        src={project.posterImage}
        alt="Project Image"
      />
      <h2 className="project--name">{project.projectName}</h2>
      <p className="project--description">{project.description}</p>
      <p className="project--techstack">
        <b>Tech Stack: </b>
        {project.techStack}
      </p>
      <Link
        className="flex items-center p-2"
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className="mr-2" />
        Github
      </Link>
    </div>
  );
}

export default Project;
