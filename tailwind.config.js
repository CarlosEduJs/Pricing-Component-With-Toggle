/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gradient: {
            start: 'hsl(236, 72%, 79%)',
            end: 'hsl(237, 63%, 64%)',
          },
        },
        neutral: {
          'very-light-grayish-blue': 'hsl(240, 78%, 98%)',
          'light-grayish-blue': 'hsl(234, 14%, 74%)',
          'grayish-blue': 'hsl(233, 13%, 49%)',
          'dark-grayish-blue': 'hsl(232, 13%, 33%)',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
      },
    },
  },
  plugins: [],
}

