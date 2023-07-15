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
            'bg_signup': "url(https://imagetolink.com/ib/f9SGiHQ1TE.png)",            
          }
      },
      animation: {
        wiggle: 'wiggle 1s infinite',
        bounce: 'bounce 1s infinite',
        moveToCloud: 'moveToCloud 1s infinite',
        moveToCloud_sm: 'moveToCloud_sm 1s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-25%);' },
          '50%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%);' },
          '50%': { transform: 'translateY(0)' },
        },
        moveToCloud: {
          '0%, 100%': { transform: 'translateY(-1400%)', opacity: "0" },
          '50%': { transform: 'translateY(1300%)', opacity: "1" },
        },
        moveToCloud_sm: {
          '0%, 100%': { transform: 'translateY(-900%)', opacity: "0" },
          '50%': { transform: 'translateY(0%)', opacity: "1" },
        }
      }
  }
 ,
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
}