import About from "@/components/About";
import React from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <About />
        <ProjectList />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
