/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      dropShadow: {
        "glow": "0 0 2px rgb(1 1 1 / 0.15)",
        "glow-md": "0 0 5px rgb(1 1 1 / 0.15)",
        "glow-lg": "0 0 10px rgb(1 1 1 / 0.15)",
        "glow-xl": "0 0 13px rgb(1 1 1 / 0.15)",
        "glow-2xl": "0 0 13px rgb(1 1 1 / 0.15)"
      }
    },
  },
  plugins: [],
}

