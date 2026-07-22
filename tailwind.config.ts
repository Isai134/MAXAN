import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maxan: {
          50: '#f5f8ef',
          100: '#e8efdc',
          200: '#d2dfbd',
          300: '#b4ca96',
          400: '#94b16d',
          500: '#7a9c49',
          600: '#607e37',
          700: '#4b622e',
          800: '#3e4f29',
          900: '#354426',
          950: '#1b2512',
        },
        ink: '#15221d',
        mist: '#f5f7f4',
      },
      boxShadow: {
        card: '0 22px 70px -35px rgba(21, 34, 29, .28)',
        soft: '0 12px 40px -22px rgba(21, 34, 29, .24)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(122,156,73,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122,156,73,.08) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
