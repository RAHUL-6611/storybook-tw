module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
