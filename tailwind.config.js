module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      SignikaNegative: "Signika Negative",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #00CCFF 0.48%, #D5E3F1 100%)",
        black_gradient: "linear-gradient(to right, #434343, #000000 )",
        sexy_blue: "linear-gradient(to left, #2193b0 0.48%, #6dd5ed 100%)",
      },
      borders: {
        bordersblack: "rgb(53, 53, 53) 0.1rem solid",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
