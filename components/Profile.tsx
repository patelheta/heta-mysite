import React from "react";

function Profile() {
  const firstname = "Heta";
  const lastName = "Patel";
  return (
    <aside>
      <div className="profile__name">
        <h2>
          <span className="profile--bold">{firstname}</span> {lastName}
        </h2>
      </div>
      <div className="profile__description">
        <p>Full Stack Developer, currently based in Canada</p>
      </div>
      <div className="profile__action">
        <div className="profile--btn">Work</div>
        <div className="profile--btn">About</div>
        <div className="profile--btn">Project</div>
      </div>
    </aside>
  );
}

export default Profile;
