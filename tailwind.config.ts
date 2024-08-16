import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: 'hsl(var(--jet) / <alpha-value>)',
        onyx: 'hsl(var(--onyx) / <alpha-value>)',
        'eerie-black-1': 'hsl(var(--eerie-black-1) / <alpha-value>)',
        'eerie-black-2': 'hsl(var(--eerie-black-2) / <alpha-value>)',
        'smoky-black': 'hsl(var(--smoky-black) / <alpha-value>)',
        'white-1': 'hsl(var(--white-1) / <alpha-value>)',
        'white-2': 'hsl(var(--white-2) / <alpha-value>)',
        'orange-yellow-crayola': 'hsl(var(--orange-yellow-crayola) / <alpha-value>)',
        'vegas-gold': 'hsl(var(--vegas-gold) / <alpha-value>)',
        'light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
        'light-gray-70': 'hsl(var(--light-gray-70) / 0.7)',
        'bittersweet-shimmer': 'hsl(var(--bittersweet-shimmer) / <alpha-value>)',
      },
      screens: {
        'sm': '450px',   // Custom breakpoint for 450px
        'md': '580px',   // Custom breakpoint for 580px
        'lg': '768px',   // Custom breakpoint for 768px
        'xl': '1024px',  // Custom breakpoint for 1024px
        '2xl': '1250px', // Custom breakpoint for 1250px
      },
      fontFamily: {
        poppins: 'var(--ff-poppins)',
      },
      fontSize: {
        '1': 'var(--fs-1)',
        '2': 'var(--fs-2)',
        '3': 'var(--fs-3)',
        '4': 'var(--fs-4)',
        '5': 'var(--fs-5)',
        '6': 'var(--fs-6)',
        '7': 'var(--fs-7)',
        '8': 'var(--fs-8)',
      },
      fontWeight: {
        300: 'var(--fw-300)',
        400: 'var(--fw-400)',
        500: 'var(--fw-500)',
        600: 'var(--fw-600)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
        4: 'var(--shadow-4)',
        5: 'var(--shadow-5)',
      },
      transitionProperty: {
        1: 'var(--transition-1)',
        2: 'var(--transition-2)',
      },
      backgroundImage: {
        'gradient-onyx': 'var(--bg-gradient-onyx)',
        'gradient-jet': 'var(--bg-gradient-jet)',
        'gradient-yellow-1': 'var(--bg-gradient-yellow-1)',
        'gradient-yellow-2': 'var(--bg-gradient-yellow-2)',
        'border-gradient-onyx': 'var(--border-gradient-onyx)',
        'text-gradient-yellow': 'var(--text-gradient-yellow)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.hide-resizer::-webkit-resizer': {
          display: 'none',
        }
      });
    })
  ],
};
export default config;
