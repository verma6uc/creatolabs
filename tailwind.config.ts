import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': 'var(--sage-green)',
        'sage-green-light': '#a5c2a9',
        'dark-bg': '#0F172A',  // Rich navy blue
        'dark-surface': '#1E293B',  // Lighter navy blue
        'eggplant': '#614051',
        'eggplant-dark': '#2D1E26',
        'slate-800': '#1E293B',
        'slate-900': '#0F172A',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(165, 194, 169, 0.2), 0 0 10px rgba(165, 194, 169, 0.1)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(165, 194, 169, 0.4), 0 0 30px rgba(165, 194, 169, 0.2)',
          },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      boxShadow: {
        'timeline': '0 0 15px rgba(165, 194, 169, 0.3)',
        'card': '0 0 20px rgba(165, 194, 169, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
