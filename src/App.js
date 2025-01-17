import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/static.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="bg-dark min-h-screen text-light static-effect">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
              </main>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
