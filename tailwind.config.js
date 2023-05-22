/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oxygen': ['Oxygen']
      },
       backgroundImage:
          {
            'feature_pattern': "url('./src/assets/hero-bg-bottom.svg')",
            'bg_model': "url(https://imagetolink.com/ib/PVLnW6hQBV.png)",
            'bg_pay': "url(https://imagetolink.com/ib/yOtxG2AUsh.png)",
            'bg_contact': "url(https://imagetolink.com/ib/RDwZV22a69.png)",
          }
      }
  }
 ,
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
}