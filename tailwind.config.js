export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
      'tablet': {'min': '500px', 'max': '1237px'},
    }
    },
    
  },
  plugins: [],
}