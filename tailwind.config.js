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
            'bg_model': "url(https://imagetolink.com/ib/KOU7mlUQ5y.png)",
            'bg_pay': "url(https://imagetolink.com/ib/yOtxG2AUsh.png)",
          }
      }
  }
 ,
  plugins: [require("tailwind-scrollbar")],
}