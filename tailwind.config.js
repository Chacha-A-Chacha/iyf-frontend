/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    plugins: [
      require('@tailwindcss/forms'),
    ],
      backgroundImage: {
        dash: "url('/assets/png/dash.png')",
      },
      colors: {
        IYF Free Weekend Academy: {
          500: "#005EAD",
          600: "#054981",
        },
        'sky-700': '#005EAD',
        'red-500': '#EF4444E1',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
