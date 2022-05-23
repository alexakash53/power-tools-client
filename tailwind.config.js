module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        constructiontheme: {
          primary: "#FBC22B",
          secondary: "#FE9013",
          accent: "#A8171A",
          neutral: "#2D2D2D",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}