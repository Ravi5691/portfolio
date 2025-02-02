module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // or your specific paths
    ],
    theme: {
      extend: {
        backgroundClip: {
          text: 'text',  // This enables background-clip: text
        },
        boxShadow: {

            'glow': ['0 0 20px rgba(255, 255, 255, 0.3)', '0 0 40px rgba(255, 255, 255, 0.2)'] // Add your custom glow effect
    
          }
      },
    },
    plugins: [],
  }
  