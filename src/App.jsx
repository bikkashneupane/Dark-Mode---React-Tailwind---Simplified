import { useEffect, useState } from "react";

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
    <div className="mt-10 flex justify-center">
      <button
        className="bg-black dark:bg-gray-100 text-white dark:text-black px-6 py-2 rounded "
        onClick={toggleDarkMode}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default App;
