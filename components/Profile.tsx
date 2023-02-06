import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

function Profile(props: any) {
  const profile = {
    firstName: "Heta",
    lastName: "Patel",
    description: "Full Stack Developer, currently based in Canada",
    email: "patelheta385@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/hetapatel385/",
    githubUrl: "https://github.com/patelheta",
  };
  return (
    <aside>
      <div className="profile__name">
        <h2>
          Hi, I am <span className="profile--bold">{profile.firstName}</span>{" "}
          {profile.lastName}
        </h2>
      </div>
      <div className="profile__description">
        <p>Full Stack Developer, currently based in Canada</p>
      </div>
      <div className="profile__action">
        <div className="profile--btn shadow-xl" onClick={props.onWork}>
          Work
        </div>
        <div className="profile--btn shadow-xl" onClick={props.onAbout}>
          About
        </div>
      </div>
      <div className="profile__contact flex flex-row space-x-3 mt-5">
        <div className="contact__item p-2 flex-auto text-center shadow-xl">
          <a href={`mailto:${profile.email}`}>
            <EmailIcon />
          </a>
        </div>
        <div className="contact__item p-2 flex-auto text-center shadow-xl">
          <Link href={profile.linkedInUrl} target="_blank">
            <LinkedInIcon />
          </Link>
        </div>
        <div className="contact__item p-2 flex-auto text-center shadow-xl">
          <Link href={profile.githubUrl} target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
