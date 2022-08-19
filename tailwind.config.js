/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        99: "85vh",
        69: "calc(100% - 100px)",
        150: "150%",
      },
      minWidth: {
        ad: "380px",
      },
      keyframes: {
        poof: {
          "0%": { opacity: "0", transform: "translateY(-5px)}" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        minHeight: {
          ad: "400px",
        },
        width: {
          150: "150%",
        },
      },
    },
    plugins: [],
  },
};
