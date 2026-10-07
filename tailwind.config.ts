import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

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
        // Semantic tokens (see styles/globals.css)
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        prose: '66ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
