const {nextui} = require("@nextui-org/react")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./feature/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#EB5757",
        light_red:"#FFE7E7",
        
      },
      colors:{
        primary:"#EB5757",
        gray_1:"#828282",
        gray_2:"#4F4F4F",
      }
    
    },
  },
  plugins: [nextui()],
};

