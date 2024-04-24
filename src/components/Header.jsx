import { useEffect, useState } from "react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => handleLoad(), []);

  function handleLoad() {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function handleClick() {
    document.documentElement.classList.toggle("dark");
    setDarkMode((state) => !state);
    darkMode
      ? localStorage.setItem("color-theme", "light")
      : localStorage.setItem("color-theme", "dark");
  }

  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>

      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>
        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </a>

        <button
          onClick={handleClick}
          id="theme-toggle"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
        >
          <DarkIcon newClass={darkMode ? "hidden" : ""} />
          <LightIcon newClass={darkMode ? "" : "hidden"} />
        </button>
      </div>
    </header>
  );
}

export default Header;
