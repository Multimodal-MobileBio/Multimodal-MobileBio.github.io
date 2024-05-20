import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <Overview />
      <hr className="w-full py-0" />
      <Team />
      <hr className="w-full py-0" />
      <Contact />
      <hr className="w-full py-0" />
      <Footer />
    </>
  );
}

export default App;
