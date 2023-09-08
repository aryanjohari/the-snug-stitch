/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'fabric-selection' : "url('assets/how we work/fabric selection.jpeg')",
        'on-time' : "url('assets/how we work/truck.webp')",
        'in-house' : "url('assets/how we work/inhouse cut to pack.jpg')",
        'quality-affordable' : "url('assets/how we work/handshake.jpeg')",
        'popup' : "url('assets/popup.jpg')"
      }
    },
  },
  plugins: [],
}

