module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: {
          400: "#4fce5d",
          800: "#009b0f",
          A700_02: "#10cc00",
          A700_01: "#009d48",
          A700_33: "#10cc0033",
          A700: "#1ed760",
        },
        deep_purple: {
          A200_19: "#9f4deb19",
          A200: "#9f4deb",
          A200_cc: "#9f4debcc",
          A200_3f: "#9f4deb3f",
          A400: "#551bf9",
          A200_66: "#9f4deb66",
          A200_00: "#9f4deb00",
          A200_01: "#6b43fd",
          A200_02: "#9f4dea",
          A200_7f: "#9f4deb7f",
          A200_99: "#9f4deb99",
        },
        light_green: { 800: "#53a318", A700: "#7fba00" },
        red: {
          600: "#e52836",
          800: "#cb2026",
          A700: "#bd0000",
          A200: "#ff5050",
          A700_01: "#ff0000",
          A700_33: "#ff000033",
        },
        light_blue: {
          100: "#a9d2fe",
          500: "#00a4ef",
          600: "#139ad6",
          "500_01": "#00acee",
          A700: "#0084ff",
          A400_7f: "#00c1ff7f",
          A700_26: "#0084ff26",
        },
        black: {
          900: "#05011d",
          "900_01": "#000000",
          "900_00": "#04001d00",
          "900_99": "#05011d99",
          "900_19": "#05011d19",
          "900_3f": "#0000003f",
        },
        yellow: {
          700: "#f3b925",
          800: "#f5a623",
          900: "#e27625",
          A400: "#ffe500",
          "800_02": "#f6ac1d",
          "800_01": "#f7981d",
          "900_02": "#e17726",
          "900_01": "#f5841f",
          "900_04": "#f6921e",
          "900_03": "#e27525",
          A200_7f: "#f5fa007f",
        },
        blue_gray: { 900: "#233447" },
        white: {
          A700_4c: "#ffffff4c",
          A700_63: "#ffffff63",
          A700_33: "#ffffff33",
          A700_19: "#ffffff19",
          A700: "#ffffff",
          A700_6c: "#ffffff6c",
        },
        gray: {
          100: "#f5f5f5",
          200: "#eaeaea",
          300: "#dce5e5",
          400: "#d4c3b3",
          500: "#a5a5a5",
          600: "#818181",
          700: "#555555",
          800: "#4f4f4f",
          900: "#1f1f1f",
          "500_01": "#979797",
          "400_05": "#c3c3c3",
          "400_01": "#b4b4b4",
          "400_02": "#d5bfb2",
          "400_03": "#c0ac9d",
          "400_04": "#c6c6c6",
          "900_02": "#142029",
          "900_01": "#161616",
          "300_01": "#dadada",
        },
        orange: {
          500: "#ff9900",
          600: "#ff8500",
          800: "#ed6c0c",
          900: "#e05a00",
          "600_01": "#ef8f00",
          "800_01": "#e26600",
          "900_01": "#d85107",
        },
        amber: {
          600: "#ffb700",
          "600_26": "#ffb80026",
          "600_01": "#ffb900",
          "600_02": "#ffb600",
        },
        blue: {
          A700: "#0052ff",
          A200_01: "#4a92ff",
          A200: "#4285f4",
          "600_44": "#299ad144",
        },
        purple: {
          100: "#ffacff",
          A700: "#bc00ff",
          A700_26: "#bd00ff26",
          A100: "#f7a0f9",
        },
        deep_orange: { 600: "#f25022", 800: "#cc6228" },
        lime: { 900: "#763e1a" },
        pink: { 600: "#d62976", A200: "#ff3567" },
        indigo: { 500: "#534bb1", "500_01": "#4267b2" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#534bb1,#551bf9)",
        gradient1: "linear-gradient(180deg ,#04001d00,#05011d)",
        gradient2: "linear-gradient(270deg ,#9f4deb00,#9f4deb,#9f4deb00)",
        gradient3: "linear-gradient(223deg ,#ffacff,#f7a0f9)",
      },
      fontFamily: {
        sfpro: "SF Pro Display",
        dmsans: "DM Sans",
        rubik: "Rubik",
        sfprodisplay: "SF Pro Display",
        mulish: "Mulish",
        ebrima: "Ebrima",
        alata: "Alata",

      },
      boxShadow: {
        bs5: "0px 5px  30px 0px #9f4debcc",
        bs7: "0px 0px  60px 0px #9f4deb3f",
        bs8: "0px 10px  60px 0px #9f4deb3f",
        bs1: "0px 10px  30px 0px #9f4deb99",
        bs: "0px 4px  35px 0px #299ad144",
        bs6: "-5px 10px  30px 0px #9f4deb99",
        bs2: "-6px 10px  20px 0px #9f4deb66",
        bs3: "-10px 10px  30px 0px #9f4deb99",
        bs4: "10px 10px  30px 0px #9f4deb99",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
