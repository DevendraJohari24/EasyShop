/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primaryText": "var(--text-primary)"
      },
      keyframes: {
        'fadeInRight': {
          '0%': {transform: 'translateX(50px)', opacity: 0},
          '100%': {opacity: 1}
        }
      },
      animation: {
        fadeInRight: 'fadeInRight 1s ease-in',
      }
    },
    
  },
  plugins: [
    require("@tailwindcss/typography"), require("daisyui")
  ],
  daisyui: {
    themes: ["forest", "retro"],
  },
}

