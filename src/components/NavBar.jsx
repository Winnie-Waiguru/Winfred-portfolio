import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="font-Poppins">
      <nav className="flex flex-row justify-between p-8 relative h-screen w-[320px] rounded-tr-2xl bg-white border border-gray-300">
        <div>
          <img
            className={!isActive ? "hidden" : "block"}
            src="./winnie.png"
            alt="winnie's logo"
          />
        </div>
        <ul className="flex flex-col h-full w-full items-center absolute  top-20 left-0 py-10  md:flex-row font-bold gap-40 ml-auto">
          <li className="list-items">
            <a href="#">About</a>
          </li>
          <li className="list-items">
            <a href="#">Projects</a>
          </li>
          <li className="list-items">
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div>
          <button
            className="md:hidden"
            onClick={() => {
              setIsActive((prevIsActive) => !prevIsActive);
            }}
          >
            {!isActive ? (
              <FaXmark className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
