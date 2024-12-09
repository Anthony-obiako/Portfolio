"use client"

import { useState, useEffect } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when transitioning to a large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the menu
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen); // Toggle the menu
  const handleCloseMenu = () => setMenuOpen(false); // Close the menu when a link is clicked

  return (
    <nav
      className="flex md:justify-around justify-between items-center px-4 py-2 h-[17vh]"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="text-3xl hover:cursor-default ">Anthony Obiako</div>

      {/* Navigation Links for Big Screens */}
      <ul className="hidden md:flex gap-6 text-2xl">
        <li>
          <a
            href="#about"
            className="hover:text-gray-400 hover:underline hover:underline-offset-[1.5rem] hover:decoration-gray-400 transition-all duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-gray-400 hover:underline hover:underline-offset-[1.5rem] hover:decoration-gray-400 transition-all duration-300"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-gray-400 hover:underline hover:underline-offset-[1.5rem] hover:decoration-gray-400 transition-all duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-gray-400 hover:underline hover:underline-offset-[1.5rem] hover:decoration-gray-400 transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Button for Small Screens */}
      {!menuOpen && (
        <button
          className="md:hidden block"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1 transition-transform"></div>
          <div className="w-6 h-0.5 bg-current mb-1 transition-opacity"></div>
          <div className="w-6 h-0.5 bg-current transition-transform"></div>
        </button>
      )}

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-1/2 flex flex-col justify-center items-center gap-4"
          style={{
            backgroundColor: "rgba(var(--background-rgb), 0.9)", // Semi-transparent
            color: "var(--foreground)",
          }}
        >
          {/* "X" Button to Close Menu */}
          <button
            onClick={handleCloseMenu}
            aria-label="Close Menu"
            className="absolute top-4 right-4 text-5xl"
          >
            &times;
          </button>
          {/* Navigation Links */}
          <a href="#about" className="text-xl hover:text-gray-400 hover:underline-offset-8 hover:underline hover:decoration-gray-400" onClick={handleCloseMenu}>
            About
          </a>
          <a href="#experience" className="text-xl hover:text-gray-400 hover:underline-offset-8 hover:underline hover:decoration-gray-400" onClick={handleCloseMenu}>
            Experience
          </a>
          <a href="#projects" className="text-xl  hover:text-gray-400 hover:underline-offset-8 hover:underline hover:decoration-gray-400" onClick={handleCloseMenu}>
            Projects
          </a>
          <a href="#contact" className="text-xl hover:text-gray-400 hover:underline-offset-8 hover:underline hover:decoration-gray-400" onClick={handleCloseMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;



