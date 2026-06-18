import { useEffect, useState } from "react";
import sun from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("dark-mode");
    return stored ? (JSON.parse(stored) as boolean) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }

    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleThemeToggle = (_e: React.MouseEvent<HTMLDivElement>) => {
    document.body.classList.toggle("light-mode");
    setDarkMode((prev) => !prev);
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("dark-mode", JSON.stringify(!isLight));
  };

  return (
    <div>
      <img
        src={darkMode ? sun : moonIcon}
        alt=""
        onClick={handleThemeToggle}
        className="button1-element p-1.5 rounded-md w-7.5  cursor-pointer"
      />
    </div>
  );
};

export default DarkModeBtn;
