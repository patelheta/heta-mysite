import React from "react";
import Project from "./Project";

function ProjectList() {
  const projectListData = [
    {
      id: 11,
      posterImage: "PhotoBooth.png",
      projectName: "PhotoBooth",
      description:
        "Place where you can save your photos and memories. Responsive design built using React and Firebase.",
      techStack: "React, Firebase",
      githubLink: "https://github.com/patelheta/PhotoBooth",
    },
    {
      id: 9,
      posterImage: "News.png",
      projectName: "News Voice Assistant ",
      description:
        "Build an Artificial Intelligence based conversational voice controlled React news application using Alan AI.",
      techStack: "React, Alan AI, JavaScript, News API, Material UI",
      githubLink: "https://github.com/patelheta/react_ai_news_application",
    },
    {
      id: 1,
      posterImage: "AllProducts.png",
      projectName: "Ecommerce",
      description:
        "Build e-commerce website help you to sell products of your choice using Sanity content management system and stripe payment system.",
      techStack: "Next.Js, Santity, Stripe",
      githubLink: "https://github.com/patelheta/ecommerce",
      demoLink: "https://ecommerce-patelheta.vercel.app/",
    },
    {
      id: 2,
      posterImage: "StarStudded.png",
      projectName: "StarStudded",
      description:
        "An application to browse a library of movies where you can add to watchlist, mark as favourite and share it to your friends.It will also have a function where you can add friends which can give you recommendations on which movies to watch.",
      techStack:
        "Typescript, Next.js, NodeJS, Express, Axios, PostgreSQL, Bootstrap, SASS, Postman",
      githubLink: "https://github.com/patelheta/StarStudded",
    },
    {
      id: 3,
      posterImage: "ShoppingCart.png",
      projectName: "ShoppingCart",
      description:
        "ShoppingCart is an ecommerce giftcards website, where users can buy giftcards, add them into cart, remove from cart, and view giftcard details.",
      techStack:
        "Next.js, React toastify, Cypress, Material icons, MaterialUI, HTML, CSS",
      githubLink: "https://github.com/patelheta/Shopping-Cart",
    },

    {
      id: 4,
      posterImage: "PasswordKeepR.png",
      projectName: "PasswordKeeper",
      description:
        "A password storage system for personal and organization use. (Just like Lastpass)",
      techStack: "Node, Express, jQuery, AJAX, Bootstrap, Cookie Session",
      githubLink: "https://github.com/patelheta/PasswordKeepR",
    },
    {
      id: 5,
      posterImage: "Schedular.png",
      projectName: "Scheduler",
      description:
        "React based project to create meetings for students to connect with mentors in real time",
      techStack:
        "React, Axios, ClassNames, Normalize, Storybook, Cypress, Jest",
      githubLink: "https://github.com/patelheta/scheduler",
    },
    {
      id: 6,
      posterImage: "Jungle.png",
      projectName: "Jungle",
      description:
        "A mini e-commerce application built with Ruby on Rails. Real time shopping experience with Stripe payment api and admin portal.",
      techStack: "Rails, Stripe, Bootstrap, PostgreSQL",
      githubLink: "https://github.com/patelheta/jungle",
    },
    {
      id: 7,
      posterImage: "Tinyapp.png",
      projectName: "Tinyapp",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
      techStack: "Node.js, Express, EJS, bcryptjs, cookie-session",
      githubLink: "https://github.com/patelheta/tinyapp",
    },
    {
      id: 8,
      posterImage: "Tweeter.png",
      projectName: "Tweeter",
      description: "Tweeter is a simple, single-page Twitter clone.",
      techStack: " HTML, CSS, JavaScript, jQuery, AJAX ",
      githubLink: "https://github.com/patelheta/tweeter",
    },
    {
      id: 10,
      posterImage: "Album.png",
      projectName: "Album Search",
      description: "Search your favourite album using Itunes search API",
      techStack: " React, Axios, Classnames ",
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
