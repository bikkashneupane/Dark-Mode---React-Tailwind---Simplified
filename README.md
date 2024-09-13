# React Dark Mode with Tailwind CSS

1.  Create React App

2.  Install Tailwind CSS with postcss & autoprefixer

    - yarn add -D tailwindcss postcss autoprefixer

3.  Generate tailwind.config.js and postcss.config.js

    - yarn tailwindcss init -p

4.  Modify tailwind.config.js (edit content)

    - content: ["./src/**/*.{js,jsx,ts,tsx}"],

5.  Add tailwind base, components and utilities to index.css

    - @tailwind base;
      @tailwind components;
      @tailwind utilities;

6.  Update index.html

- <html lang="en" class="dark">

7. Update/ Add body in index.css as desired

- body {
  @apply m-0 p-0 font-serif bg-gray-100 text-black dark:bg-gray-900 dark:text-gray-200;
  }

8.  Create a state to capture button click event to toggle darkMode.

- const [isDark, setIsDark] = useState();
- const toggleDarkMode = () => {setIsDark(!isDark)};
- <button onClick={toggleDarkMode}> Dark Mode </button>

9. Check if window exists. Add or remove class "dark" as required

- const root = window.document.documentElement;
- isDark ? root.classList.add("dark") : root.classList.remove("dark");
