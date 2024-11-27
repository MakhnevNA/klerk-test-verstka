/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import { white, black } from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white,
      black,
      grey1: "#999",
      grey2: "#666",
      grey3: "#f5f5f8",
      grey4: "#dcdcdc",
      blue1: "#5a8cf1",
      blue2: "#316fee",
      green1: "#00CC33",
    },
    boxShadow: {
      mainShadow: `0 0.5rem 1rem 0 rgba(0, 0, 0, 0.08)`,
    },
    extend: {
      fontSize: {
        H1Bold: "clamp(2rem, 5.2vw, 3.5rem)",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#b9d7fb #f1f3f5",
        },
      });
    }),
  ],
};
