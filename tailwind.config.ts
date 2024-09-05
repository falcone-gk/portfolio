import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        java: {
          "50": "#f5f8f7",
          "100": "#dfe8e6",
          "200": "#bfd0cd",
          "300": "#98b0ae",
          "400": "#728f8d",
          "500": "#577572",
          "600": "#445d5b",
          "700": "#394c4a",
          "800": "#313e3d",
          "900": "#2b3635",
          "950": "#111717",
        },
      },
    },
  },
};
