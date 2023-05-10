module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-yellow-200',
    'from-yellow-300',
    'from-yellow-400',
    'from-red-500',
    'from-orange-500',
    'from-yellow-500',
    'from-green-500',
    'from-cyan-500',
    'from-blue-500',
    'from-indigo-500',
    'from-violet-500',
    'from-purple-500',
    'from-pink-500',
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
