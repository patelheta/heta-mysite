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
        <h1>What I love about the Company</h1>
        <h4>Here are some facts that I really like about the Company...</h4>
        <p>
          the Company helps people and businesses thrive the Company solutions
          aim to help businesses streamline their operations, improve
          productivity, and enhance their relationships with customers and
          employees.
        </p>
        <p>
          Care for design and user experience the Company products are designed
          with a user-centric approach and strive to provide an intuitive and
          seamless user experience. I LOVE the Company clean and modern design!
        </p>
        <p>
          Strong team, compassionate people Respect and trust between coworkers
          are values that are important to me. the Company has a strong team of
          people who are compassionate and supportive which makes the Company a
          special place to work.
        </p>
      </div>
      <div className="project--container">
        <h1>But why should the Company hire me?</h1>
        <h4>Passion for design and UX</h4>
        <p>
          I have a strong desire to create software and online experiences that
          are both visually appealing and intuitive for users. I am always
          looking for ways to make the user journey through a website as
          seamless and enjoyable as possible. I believe that design can change
          the way people interact with software.
        </p>
        <h4>Quickly adopt and learn</h4>
        <p>
          I pride myself on my ability to quickly learn and adapt to new
          technologies. (I am always curious to learn new technologies!) One of
          the things I love about software development is that it a never-ending
          learning journey and I am always looking for ways to expand my skills
          and knowledge in the field.
        </p>
        <h4>Collaboration</h4>
        <p>
          I believe that teamwork is key to achieving success, and I am
          committed to doing my part to contribute to the Company team efforts.
          Empathy and kindness are values that are important to me, and I try to
          incorporate them into my interactions with others.
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
