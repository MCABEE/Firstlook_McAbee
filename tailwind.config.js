/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:
          {
            'feature_pattern': "url('./src/assets/hero-bg-bottom.svg')",
            'bg_model': "url(https://imagetolink.com/ib/uHrx6AVQBw.png)",
            'bg_pay': "url(https://imagetolink.com/ib/yOtxG2AUsh.png)",
          }
      }
  }
 ,
  plugins: [],
}