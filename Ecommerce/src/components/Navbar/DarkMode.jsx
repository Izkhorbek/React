import React, { useEffect, useState } from "react";
import lightMode from "../../assets/light-mode.png";
import darkMode from "../../assets/dark-mode.png";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  const handleDarkMode = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    setTheme(localStorage.getItem("theme"));
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  console.log(theme);
  console.log(element);
  return (
    <div className="cursor-pointer group" onClick={() => handleDarkMode()}>
      <img
        src={lightMode}
        alt="light-mode"
        className={`w-16 ${
          theme === "light" ? "visible" : "hidden"
        } drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]`}
      />
      <img
        src={darkMode}
        alt="dark-mode"
        className={`w-16 ${theme === "dark" ? "visible" : "hidden"}`}
      />
    </div>
  );
};

export default DarkMode;
