import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Custom brand color — deep ocean blue, hex values for reliability
        brand: {
          50:  '#eef5ff',
          100: '#d9ebff',
          200: '#bcd8ff',
          300: '#85bcff',
          400: '#4d9bf7',
          500: '#2479e8',
          600: '#1a59b3',  // primary brand color
          700: '#154a91',
          800: '#103570',
          900: '#0a2147',
        },
        sky: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      boxShadow: {
        'card':      '0 1px 2px rgba(26,89,179,0.04), 0 4px 10px rgba(26,89,179,0.07)',
        'card-hover':'0 2px 4px rgba(26,89,179,0.05), 0 10px 28px rgba(26,89,179,0.13), 0 0 0 1px rgba(26,89,179,0.05)',
        'elevated':  '0 1px 3px rgba(0,0,0,0.04), 0 6px 14px rgba(26,89,179,0.09), 0 16px 32px rgba(26,89,179,0.06)',
        'floating':  '0 4px 8px rgba(0,0,0,0.04), 0 12px 24px rgba(26,89,179,0.10), 0 24px 48px rgba(26,89,179,0.07)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config
