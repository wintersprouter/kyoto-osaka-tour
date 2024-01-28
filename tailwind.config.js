/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,'node_modules/flowbite-react/lib/esm/**/*.js'}",
  ],
  // make sure to safelist these classes when using purge
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],

  // enable dark mode via class strategy
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [import("flowbite/plugin")],
};
