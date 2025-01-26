// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };


/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wixmadefor: ['"Wix Madefor Display"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      "custom-gray": "rgba(20, 20, 20, 0.75)",
      "custom-white": "rgba(255, 255, 255, 0.75)",
      "border-gray": "rgba(20, 20, 20, 0.40)",
    },
  },
  plugins: [],
};
