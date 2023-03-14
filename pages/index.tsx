import About from "@/components/About";
import React from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import Footer from "@/components/Footer";
import useVisualMode from "../hooks/useVisualMode";

const ABOUT = "ABOUT";
const WORK = "WORK";
const COMPANY = "COMPANY";

function App() {
  const { mode, transition } = useVisualMode(WORK);
  return (
    <div className="App">
      <Navigation />
      <Profile
        onWork={() => transition(WORK)}
        onAbout={() => transition(ABOUT)}
      />
      <main className="container">
        {mode === WORK && <ProjectList />}
        {mode === ABOUT && <About />}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
