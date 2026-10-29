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
        cyber: {
          bg: '#040711',
          space: '#040711',
          dark: '#080d1a',
          card: '#0d1527',
          cardHover: '#131f38',
          cyan: '#00f0ff',
          'cyan-glow': 'rgba(0, 240, 255, 0.35)',
          purple: '#b026ff',
          'purple-glow': 'rgba(176, 38, 255, 0.35)',
          magenta: '#ff007f',
          gold: '#ffb703',
          emerald: '#00ff66',
          border: 'rgba(0, 240, 255, 0.2)',
          'border-light': 'rgba(255, 255, 255, 0.08)',
          text: '#f1f5f9',
          muted: '#8899b5',
          darkmuted: '#475569',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.2)',
        'neon-cyan-sm': '0 0 8px rgba(0, 240, 255, 0.4)',
        'neon-purple': '0 0 15px rgba(176, 38, 255, 0.5), 0 0 30px rgba(176, 38, 255, 0.2)',
        'neon-magenta': '0 0 15px rgba(255, 0, 127, 0.5), 0 0 30px rgba(255, 0, 127, 0.2)',
        'neon-gold': '0 0 15px rgba(255, 183, 3, 0.5), 0 0 30px rgba(255, 183, 3, 0.2)',
        'cyber-card': '0 8px 32px 0 rgba(0, 240, 255, 0.08), inset 0 0 0 1px rgba(0, 240, 255, 0.18)',
        'cyber-glow': '0 0 25px rgba(0, 240, 255, 0.25)',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.98)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'grid-move': 'gridMove 4s linear infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'glitch': 'glitch 0.4s ease-in-out infinite',
        'radar': 'radarSweep 4s linear infinite',
      },
    },
  },
  plugins: [],
};
