import { Menu, X, Newspaper } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import { navItems } from "../constants";
import PropTypes from "prop-types";

const Navbar = ({ refs }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const executeScroll = (index) => {
    setMobileDrawerOpen(false);
    if (refs[index].headerRef.current) {
      refs[index].headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const nearestIndex = (
    currentPosition,
    sectionPositionArray,
    startIndex,
    endIndex,
  ) => {
    if (startIndex === endIndex) return startIndex;
    else if (startIndex === endIndex - 1) {
      if (
        Math.abs(
          sectionPositionArray[startIndex].headerRef.current.offsetTop -
            currentPosition,
        ) <
        Math.abs(
          sectionPositionArray[endIndex].headerRef.current.offsetTop -
            currentPosition,
        )
      )
        return startIndex;
      else return endIndex;
    } else {
      var nextNearest = ~~((startIndex + endIndex) / 2);
      var a = Math.abs(
        sectionPositionArray[nextNearest].headerRef.current.offsetTop -
          currentPosition,
      );
      var b = Math.abs(
        sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
          currentPosition,
      );
      if (a < b) {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          startIndex,
          nextNearest,
        );
      } else {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          nextNearest,
          endIndex,
        );
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      var index = nearestIndex(window.scrollY, refs, 0, refs.length - 1);
      setActiveIndex(index);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className="before:backdrop-root sticky top-0 z-50 py-3 before:backdrop-blur-lg">
      <div className="container relative mx-auto px-4 lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            {/* <img className="mr-2 h-10 w-10" src={logo} alt="Logo" /> */}
            <span className="text-xl tracking-tight text-text-100">
              Federated-Auth
            </span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={
                  activeIndex === index
                    ? "cursor-pointer border-b-2 border-primary-300 px-1 pb-2 pt-4 text-text-100 hover:opacity-75"
                    : "cursor-pointer px-1 pb-2 pt-4 text-text-100 hover:opacity-75"
                }
                onClick={executeScroll.bind(this, index)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="hidden items-center justify-center space-x-4 lg:flex">
            <a href="https://github.com/Multimodal-MobileBio" target="_blank">
              <img
                className="h-7 w-7 cursor-pointer opacity-75 hover:opacity-50"
                src={github}
              />
            </a>
            {/* <a
              href={github}
              download="FederatedAuth"
              target="_blank"
              className="flex items-center space-x-2 rounded-md border border-slate-400 px-3 py-2 hover:opacity-50"
            >
              <Newspaper size={24} strokeWidth={1.25} />
              <span className="text-text-100">Download</span>
            </a> */}
          </div>
          <div className="flex-col justify-end hover:opacity-50 md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-50 flex w-full flex-col items-center justify-center p-12 backdrop-blur-lg lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer py-3 hover:opacity-50"
                  onClick={executeScroll.bind(this, index)}
                >
                  {item.label}
                </li>
              ))}
              {/* <li className="py-3 hover:opacity-50">
                <a href={github} download="FederatedAuth" target="_blank">
                  Download
                </a>
              </li> */}
              <li className="py-3 hover:opacity-50">
                <a
                  href="https://github.com/Multimodal-MobileBio"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  refs: PropTypes.arrayOf(
    PropTypes.shape({
      headerRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element),
      }),
    }),
  ),
};

export default Navbar;
