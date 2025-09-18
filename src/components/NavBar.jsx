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
          role="menubar"
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
              <a
                role="menuitem"
                href="#introduction"
                className="focus-element scroll-smooth"
              >
                Home
              </a>
            </li>
            <li className="list-items">
              <a
                role="menuitem"
                href="#about"
                className="focus-element scroll-smooth"
              >
                About
              </a>
            </li>
            <li className="list-items">
              <a
                role="menuitem"
                href="#projects"
                className="focus-element scroll-smooth"
              >
                Projects
              </a>
            </li>
            <li className="list-items">
              <a
                role="menuitem"
                href="#contact"
                className="focus-element scroll-smooth"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          {/* Toggle button */}
          <div className="fixed top-0 left-0 w-full h-[64px] bg-white border-b border-gray-200/80 shadow-inner rounded-b-2xl mb-4">
            <button
              className="block md:hidden p-4 z-50"
              onClick={() => setIsActive((prev) => !prev)}
              aria-label="Open menu"
            >
              <FaBars className={`icon`} />
            </button>
          </div>

          {/* Overlay */}
          {isActive && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setIsActive(false)}
              />

              {/* Side Menu */}
              <nav
                role="dialog"
                aria-label="Side menu"
                className={`fixed top-0 left-0 h-screen w-[320px] bg-white border-r border-gray-300 z-50 p-1 
            ${
              isActive ? "translate-x-0" : "-translate-x-full"
            } transform transition-transform duration-300 ease-in-out`}
              >
                <div className="flex flex-row justify-between">
                  <img
                    src="./winnie.png"
                    alt="winfred's logo"
                    className="ml-4 my-7"
                  />
                  <button
                    className="block md:hidden p-4 z-50"
                    onClick={() => setIsActive((prev) => !prev)}
                    aria-label="Close menu"
                  >
                    <FaXmark className={`icon`} />
                  </button>
                </div>

                <ul className="flex flex-col items-center h-[420px] justify-between gap-10 font-bold">
                  <li
                    className="list-items"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    <a
                      href="#introduction"
                      className="focus-element smooth-scroll"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="list-items"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    <a href="#about" className="focus-element smooth-scroll">
                      About
                    </a>
                  </li>
                  <li
                    className="list-items"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    <a href="#projects" className="focus-element smooth-scroll">
                      Projects
                    </a>
                  </li>
                  <li
                    className="list-items"
                    onClick={() => {
                      setIsActive(false);
                    }}
                  >
                    <a href="#contact" className="focus-element smooth-scroll">
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default NavBar;
