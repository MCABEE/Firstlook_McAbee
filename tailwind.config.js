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
      wiggle: 'wiggle 4s infinite',
      bounce: 'bounce 4s infinite',
      moveToCloud: 'moveToCloud 4s infinite',
      moveToCloud_sm: 'moveToCloud_sm 4s infinite',
      moveToCloud_heart: 'moveToCloud_heart 4s infinite',
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
        '0%': { transform: 'translateY(1250%)', opacity: '1' },
        '50%': { transform: 'translateY(-1400%)', opacity: '0' },
        '100%': { transform: 'translateY(1250%)', opacity: '0' }
      },
      moveToCloud_sm: {
        '0%': { transform: 'translateY(0%)', opacity: '1' },
        '50%': { transform: 'translateY(-900%)', opacity: '0' },
        '100%': { transform: 'translateY(0%)', opacity: '0' }
      },
      moveToCloud_heart: {
        '0%': { transform: 'translateY(900%)', opacity: '1' },
        '50%': { transform: 'translateY(-1400%)', opacity: '0' },
        '100%': { transform: 'translateY(900%)', opacity: '0' }
      }
    }
  }
  ,
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
}