/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./types/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#24483E",
          forest: "#24483E",
          deep: "#18342D",
          sage: "#A8B7A6",
          clay: "#C6A27C",
          cream: "#F7F6F1",
          ink: "#202923",
          muted: "#737C74",
          line: "#E0E4DC"
        },
        bg: {
          sheet: "#F7F6F1"
        }
      },
      fontFamily: {
        helvetica: ["var(--font-dm-sans)", "Arial", "sans-serif"],
        sans: ["var(--font-dm-sans)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(32, 41, 35, 0.08)"
      },
      letterSpacing: {
        editorial: "-0.045em"
      }
    }
  },
  plugins: []
};
