import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <header className="font-Poppins md:mb-32 ">
      {windowWidth > 768 ? (
        // Desktop Menu
        <nav
          aria-label="Main Navigation"
          className="fixed top-0 left-0 bg-white justify-between px-10 flex flex-row w-full h-[64px]  border-b border-gray-200/80 shadow-inner rounded-b-2xl mb-4 items-center"
        >
          {/* Logo */}
          <img
            src="./winnie.png"
            alt="winfred's logo"
            className="w-[56px] h-[32px]"
          />

          {/* Menu Links */}
          <ul className="flex flex-row w-1/2 justify-between gap-10 font-bold">
            <li className="list-items">
              <a href="#introduction" className="scroll-smooth">
                Home
              </a>
            </li>
            <li className="list-items">
              <a href="#about" className="scroll-smooth">
                About
              </a>
            </li>
            <li className="list-items">
              <a href="#projects" className="scroll-smooth">
                Projects
              </a>
            </li>
            <li className="list-items">
              <a href="#contact" className="scroll-smooth">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          {/* Toggle button */}
          <div className=" fixed top-0 left-0 w-full h-[64px] bg-white border-b border-gray-200/80 shadow-inner rounded-b-2xl mb-4">
            <button
              className="block md:hidden p-4 z-40  "
              onClick={() => setIsActive((prev) => !prev)}
            >
              {isActive ? (
                <FaXmark
                  className={`icon fixed top-8 left-68 z-70 ${
                    isActive
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-0 rotate-90"
                  } transition-all duration-300 ease-in-out`}
                />
              ) : (
                <FaBars className="icon fixed top-4 left-6 z-30" />
              )}
            </button>
          </div>

          {/* Overlay */}
          {isActive && (
            <div
              className="fixed inset-0 bg-black/40 z-30"
              onClick={() => setIsActive(false)}
            />
          )}

          {/* Side Menu */}
          <nav
            className={`fixed top-0 left-0 h-screen w-[320px] bg-white border-r border-gray-300 z-50 p-1 
            ${
              isActive ? "translate-x-0" : "-translate-x-full"
            } transform transition-transform duration-300 ease-in-out`}
          >
            <img
              src="./winnie.png"
              alt="winfred's logo"
              className="ml-4 my-7"
            />
            <ul className="flex flex-col items-center h-[420px] justify-between gap-10 font-bold">
              <li
                className="list-items"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <a href="#introduction" className="smooth-scroll">
                  Home
                </a>
              </li>
              <li
                className="list-items"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <a href="#about" className="smooth-scroll">
                  About
                </a>
              </li>
              <li
                className="list-items"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <a href="#projects" className="smooth-scroll">
                  Projects
                </a>
              </li>
              <li
                className="list-items"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <a href="#contact" className="smooth-scroll">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default NavBar;
