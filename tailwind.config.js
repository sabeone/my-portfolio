module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rich-black": "#010b13",
        "sea-green": "#00ffcd",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#34d399",
            },
            h2: {
              color: "#34d399",
            },
            h3: {
              color: "#34d399",
            },
            h4: {
              color: "#34d399",
            },
            h5: {
              color: "#34d399",
            },
            strong: {
              color: "#e5e7eb",
            },
            a: {
              color: "#a5b4fc",
              "&:hover": {
                color: "#818cf8",
              },
            },
            blockquote: {
              color: "#e5e7eb",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
