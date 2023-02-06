import About from "@/components/About";
import React from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import Footer from "@/components/Footer";
import useVisualMode from "../hooks/useVisualMode";

const ABOUT = "ABOUT";
const WORK = "WORK";

function App() {
  const { mode, transition } = useVisualMode(ABOUT);
  return (
    <div className="App">
      <Navigation />
      <Profile
        onWork={() => transition(WORK)}
        onAbout={() => transition(ABOUT)}
      />
      <main className="container">
        {mode === ABOUT && <About />}
        {mode === WORK && <ProjectList />}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
