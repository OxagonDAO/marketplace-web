import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#E9F1FD',
          20: '#D3E3FB',
          30: '#BED4F9',
          40: '#A8C6F7',
          50: '#92B8F4',
          60: '#7CAAF2',
          70: '#669CFO',
          80: '#518DEE',
          90: '#0A41CC',
          DEFAULT: '#2571EA', // Primary blue
        },
        'like-and-kiss': {
          10: '#FEF6F6',
          20: '#FDEDED',
          30: '#FCE5E4',
          40: '#FBDCD3',
          50: '#F9D3D2',
          60: '#F8CAC9',
          70: '#F7C1C0',
          80: '#F6B9B7',
          90: '#F5B0AE',
          DEFAULT: '#F4A7A5', // Secondary like and kiss
        },
        'black-out': {
          10: '#E6E6E6',
          20: '#CDCDCD',
          30: '#B4B5B5',
          40: '#9B9C9C',
          50: '#838383',
          60: '#6A6A6A',
          70: '#515151',
          80: '#383939',
          90: '#1F2020',
          DEFAULT: '#060707', // Typeface black
        },
        success: '#3ABA6D',
        'link-info': '#FFB5B5',
        warning: '#FFC75B',
        error: '#FF585B',
      },
      backgroundImage: {
        'branch-gradient': 'linear-gradient(to right, #2571EA 0%, #7185D0 29%, #F5A8A4 79%)',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
      },
    },
  },
  plugins: [
    nextui()
  ],
};
export default config;
