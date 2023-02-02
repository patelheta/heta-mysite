import React from "react";
import Project from "./Project";

function ProjectList() {
  const projectListData = [
    {
      id: 1,
      posterImage: "StarStudded.png",
      projectName: "StarStudded",
      description:
        "An application to browse a library of movies where you can add to watchlist, mark as favourite and share it to your friends.It will also have a function where you can add friends which can give you recommendations on which movies to watch.",
      techStack:
        "Typescript, Next.js, NodeJS, Express, Axios, PostgreSQL, Bootstrap, SASS, Postman",
      githubLink: "https://github.com/patelheta/StarStudded",
    },
    {
      id: 2,
      posterImage: "ShoppingCart.png",
      projectName: "ShoppingCart",
      description:
        "ShoppingCart is an ecommerce giftcards website, where users can buy giftcards, add them into cart, remove from cart, and view giftcard details.",
      techStack:
        "Next.js,React toastify,Cypress,Material icons, MaterialUI, HTML, CSS",
      githubLink: "https://github.com/patelheta/Shopping-Cart",
    },

    {
      id: 3,
      posterImage: "PasswordKeepR.png",
      projectName: "PasswordKeeper",
      description:
        "A storage system for password for personal and organization. (Just like Lastpass)",
      techStack: "Node, Express, jQuery, AJAX, Bootstrap, Cookie Session",
      githubLink: "https://github.com/patelheta/PasswordKeepR",
    },
    {
      id: 4,
      posterImage: "Schedular.png",
      projectName: "Scheduler",
      description:
        "React based project to create meetings for students to connect with mentors in real time",
      techStack:
        "React, Axios, ClassNames, Normalize, Storybook, Cypress, Jest",
      githubLink: "https://github.com/patelheta/scheduler",
    },
    {
      id: 5,
      posterImage: "Jungle.png",
      projectName: "Jungle",
      description:
        "A mini e-commerce application built with Ruby on Rails. Real time shopping experience with Stripe payment api and admin portal.",
      techStack: "Rails, Stripe, Bootstrap, PostgreSQL",
      githubLink: "https://github.com/patelheta/jungle",
    },
    {
      id: 6,
      posterImage: "Tinyapp.png",
      projectName: "Tinyapp",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
      techStack: "Node.js, Express, EJS, bcryptjs, cookie-session",
      githubLink: "https://github.com/patelheta/tinyapp",
    },
    {
      id: 7,
      posterImage: "Tweeter.png",
      projectName: "Tweeter",
      description: "Tweeter is a simple, single-page Twitter clone.",
      techStack: " HTML, CSS, JavaScript, jQuery, AJAX ",
      githubLink: "https://github.com/patelheta/tweeter",
    },
  ];
  return (
    <section className="tweets">
      {projectListData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}

export default ProjectList;
