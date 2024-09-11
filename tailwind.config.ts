import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        customPrimary: {
          "50": "#f1fcf5",
          "100": "#defaea",
          "200": "#bef4d5",
          "300": "#8beab6",
          "400": "#52d68d",
          "500": "#33d17a",
          "600": "#1d9c56",
          "700": "#1b7a46",
          "800": "#1a613b",
          "900": "#175033",
          "950": "#072c19",
        },
        customGray: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#222222",
        },
      },
    },
  },
};
