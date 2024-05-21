import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const backgroundRef = useRef(null);
  const overviewRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [
    {
      label: "Background",
      headerRef: backgroundRef,
    },
    {
      label: "Overview",
      headerRef: overviewRef,
    },
    {
      label: "Team",
      headerRef: teamRef,
    },
    {
      label: "Contact",
      headerRef: contactRef,
    },
  ];

  return (
    <div className="bg-background-900">
      <Navbar refs={refs} />
      <Hero backgroundRef={backgroundRef} />
      <Background sectionRef={backgroundRef} />
      <Overview sectionRef={overviewRef} />
      <Team sectionRef={teamRef} />
      <Contact sectionRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
