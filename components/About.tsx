import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  const aboutInfo = {
    summary: `Full-Stack Developer with 2 plus years of experience in analysis, design, development and testing of various web applications and strong SQL and database abilities. Specialized in the design and development of reliable and efficient enterprise applications using JavaScript technologies, which include React, Next.js, Node.js, AngularJS, and RESTAPIs. Excellent communication and leadership skills. Flexible and adaptable to the demands of changing work environments.
    `,
    experience: {
      jobtitle: `Junior Software Developer`,
      companyName: `Kiluam Software Inc.`,
      location: `Canada`,
      from: {
        year: 2021,
        month: "July",
      },
      to: {
        month: "Sept.",
        year: 2022,
      },
      description: `Designed and developed full-stack web application using HTML5, CSS3,
      ReactJS, and NodeJS for our clients. Developed dynamic and interactive
      websites that ensured high traffic, page views and user experience,
      resulted in 25% increase in sales revenue.  Analyzed client needs and
      proposed new design website to meet their requirements.`,
    },
  };
  return (
    <>
      <div className="project--container">
        <p>{aboutInfo.summary}</p>
      </div>
      <div className="project--container">
        <h2>Skills</h2>
        <p className="mt-0">
          <b>Languages:</b> JavaScript, TypeScript, Ruby, Python, HTML, CSS,
          SQL, GraphQL, .Net <br />
          <b>Frameworks:</b> NodeJS, React, Redux, Next.js, Express, jQuery,
          Ajax, AngularJS, Rails, Vue.js <br />
          <b>Libraries:</b> Bootstrap, Axios, Stripe, Tailwind, Sanity,
          Storybook, Babel, Webpack, Alan AI
          <br />
          <b>Systems & Databases:</b> PostgreSQL, MySQL, MongoDB, Git <br />
          <b>Testing:</b> Jest, Mocha, Chai, Storybook, Cypress, RSpec <br />
          <b>Cloud Technologies & IDEs:</b> AZURE, VS Code, Visual Studio, Figma
        </p>
      </div>
      <div className="project--container">
        <h2>Experience</h2>
        <h4>
          Junior Software Developer, Kiluam Software Inc., Canada <br />
          <small>July 2021 - Sept. 2022</small>
        </h4>
        <p>
          Designed and developed full-stack web application using HTML5, CSS3,
          ReactJS, and NodeJS for our clients. Developed dynamic and interactive
          websites that ensured high traffic, page views and user experience,
          resulted in 25% increase in sales revenue.  Analyzed client needs and
          proposed new design website to meet their requirements.
        </p>

        <h4>
          Tutor/ Physiotherapist, Gokul Physiotherapy College, India <br />
          <small>June 2020 - Dec. 2020</small>
        </h4>
      </div>
      <div className="project--container">
        <h2>Education</h2>
        <h4>
          Lighthouse Labs
          <br /> <small>Sept. 2022 - Jan. 2023</small>
        </h4>
        <p className="mt-0">Diploma Full-Stack Web Development</p>
        <p>
          Relevant Coursework: Introduction to JavaScript, Front-end
          development, Back-end development, Database Management, Data
          structures and Algorithms, JavaScript Frameworks, CI/CD, DevOps, Ruby,
          Ruby On Rails.
        </p>
        <h4>
          Hemchandracharya North Gujarat University, India <br />{" "}
          <small>Aug. 2016 - June 2020</small>
        </h4>
        <p className="mt-0">Bachelor of Physiotherapy</p>
      </div>
      <div className="project--container">
        <h2>Certificates</h2>
        <h4>Microsoft Certified: Azure Fundamentals - Dec. 2022</h4>
        <h4 className="mb-0">Become a Front-End Web Developer</h4>
        <p className="mt-0">
          The University of British Columbia - LinkedIn Learning <br />{" "}
          <small>April 2022 - July 2022</small>
        </p>
      </div>
      <div className="project--container">
        <h2>Get in touch</h2>
        <p>I am always down to chat, feel free to reach out!</p>
        <p>
          <a
            className="hyperlink flex items-center w-auto"
            href={`mailto:patelheta385@gmail.com`}
          >
            <EmailIcon className="mr-2" />
            Send An Email
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
