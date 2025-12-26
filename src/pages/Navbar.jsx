import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4 flex justify-center w-full relative ">
      {/* NAVBAR */}
      <nav className="shadow-xl w-[90%] rounded-2xl px-4 py-3  fixed top-4 z-20 flex justify-between items-center">
        <h1
          className="font-bold text-2xl cursor-pointer"
          onClick={() => scrollToSection("#home")}
        >
          <motion.div animate={{ textShadow: ["0 0 3px"] }}>
            Portfolio
          </motion.div>
        </h1>

        {/* Desktop Menu */}
        <motion.ul whileHover={{ textShadow: ["0 0 5px"] }}>
          <ul className="hidden sm:flex gap-6 font-medium">
            <a href="#home">
              <li className="hover:text-indigo-500 cursor-pointer">Home</li>
            </a>

            <a href="#about">
              <li className="hover:text-indigo-500 cursor-pointer">About</li>
            </a>
            <a href="#skills">
              <li className="hover:text-indigo-500 cursor-pointer">Skills</li>
            </a>
            <a href="#projects">
              <li className="hover:text-indigo-500 cursor-pointer">Projects</li>
            </a>

            <a href="#contact">
              <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
            </a>
          </ul>
        </motion.ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden z-30 p-2 rounded-xl transition-transform duration-300"
        >
          {!isMenuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-7 w-7 stroke-current cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-7 w-7 stroke-current cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-2xl pt-20 px-6 transform transition-transform duration-300 ease-in-out z-10 rounded-l-3xl ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium">
          <a href="#home">
              <li className="hover:text-indigo-500 cursor-pointer">Home</li>
            </a>

            <a href="#about">
              <li className="hover:text-indigo-500 cursor-pointer">About</li>
            </a>
            <a href="#skills">
              <li className="hover:text-indigo-500 cursor-pointer">Skills</li>
            </a>
            <a href="#projects">
              <li className="hover:text-indigo-500 cursor-pointer">Projects</li>
            </a>

            <a href="#contact">
              <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
            </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
