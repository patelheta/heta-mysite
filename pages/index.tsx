import React from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <ProjectList />
      </main>
    </div>
  );
}

export default App;
