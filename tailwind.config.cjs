/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans],
        hack: ["Hack", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
