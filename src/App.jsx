import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

function App() {
  const [isDark, setIsDark] = useState();

  useEffect(() => {
    // check if window is loaded
    // is isDark: add class dark
    // else remove class dark

    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      isDark ? root.classList.add("dark") : root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <button
        className="bg-gray-200 dark:bg-gray-200 text-black p-2 rounded-full"
        onClick={toggleDarkMode}
      >
        {isDark ? (
          <LuSunMedium className="h-10 w-10 " />
        ) : (
          <FaMoon className="h-10 w-10" />
        )}
      </button>

      <h1>Dark Mode Simplified</h1>
    </div>
  );
}

export default App;
