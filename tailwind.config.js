/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        surface: "#FFFFFF",
        primary: "#1F2937",
        gundamBlue: "#0055A4",
        mechaRed: "#ED1A3B",
        visorYellow: "#F9D030",
        gridLine: "rgba(31, 41, 55, 0.05)",
        darkBg: "#0F172A",
        darkSurface: "#1E293B",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'target-lock': 'target-lock 0.3s ease-in-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'target-lock': {
          '0%': { backgroundSize: '0% 2px, 2px 0%, 0% 2px, 2px 0%' },
          '100%': { backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%' },
        }
      }
    },
  },
  plugins: [],
}
