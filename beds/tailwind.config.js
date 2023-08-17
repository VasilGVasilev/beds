/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
          "contacts-bg": "url('/contact-bg.webp')",
      }),
      colors: {
        'ixora-deep-blue': '#111827',
        'ixora-dark': '#292927'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '0 20px 120px -15px rgba(0, 0, 0, 0.3)',
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      }, 
    },
  },
  plugins: [],
}
