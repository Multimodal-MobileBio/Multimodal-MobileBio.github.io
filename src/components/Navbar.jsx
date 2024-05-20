import { Menu, X, Newspaper } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-10" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Federated-Auth</span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="text-md" href={item.href}>
                  {item.label}
                </a>
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
            <a
              href="#"
              className="flex items-center space-x-2 rounded-md  px-3 py-2 opacity-75 hover:opacity-50"
            >
              <Newspaper size={24} strokeWidth={1.5} />
              <span>Download</span>
            </a>
          </div>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-secondary-700 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    onClick={() => {
                      setMobileDrawerOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="flex items-center space-x-2 rounded-md  px-3 py-2 opacity-75 hover:opacity-50"
              >
                <Newspaper size={24} strokeWidth={1.5} />
                <span>Download</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
