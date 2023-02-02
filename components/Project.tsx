import React from "react";

function Project(project: any) {
  return (
    <div className="project--container">
      <img
        className="project--poster"
        src={project.posterImage}
        alt="Project Image"
      />
      <h3 className="project--name">{project.projectName}</h3>
      <p className="project--description">{project.description}</p>
      <p className="project--techstack">{project.techStack}</p>
      <a href={project.githubLink}>Github</a>
    </div>
  );
}

export default Project;
