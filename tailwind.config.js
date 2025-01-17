/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',
        secondary: '#9333EA',
        accent: '#4F46E5',
        dark: '#0A0A0A',
        light: '#F8FAFC',
      },
      animation: {
        'scan': 'scan 10s linear infinite',
        'scanline': 'scanline 2s linear infinite',
        'glowPulse': 'glowPulse 2s ease-in-out infinite',
        'glitchText': 'glitchText 3s ease-in-out infinite',
        'expand': 'expand 1s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'typewriter': 'typewriter 2s steps(20) forwards',
        'scrollMouse': 'scrollMouse 2s ease-in-out infinite',
        'trackingLines': 'trackingLines 8s linear infinite',
        'blink': 'blink 2s steps(2) infinite',
        'noise': 'noise 8s steps(10) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        glitchText: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)', textShadow: '2px 0 red, -2px 0 blue' },
          '66%': { transform: 'translate(2px, -2px)', textShadow: '-2px 0 red, 2px 0 blue' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '8rem' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        scrollMouse: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' }
        },
        trackingLines: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' },
        },
      },
    },
  },
  plugins: [],
}