const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ["Freight Text Pro", ...defaultTheme.fontFamily.serif],
            },
            fontSize: {
                // Set in Perfect Fourth typescale (1.33)
                small: "1rem",
                base: "1.25rem",
                lg: "1.333rem",
                xl: "1.777rem",
                "2xl": "2.369rem",
                "3xl": "3.157rem",
                "4xl": "4.2rem",
                "5xl": "5.61rem",
            },
            colors: {
                ...colors,
                lightPink: "#fdf4f0",
                lavender: "#dadef1",
                darkBlue: "#230B5A",
                mediumBlue: "#544674",
                neutralBlue: "#8A85A0",
                lightBlue: "#DBDBE9",
                lightBlueOpacity: "#DBDBE970",
                offWhite: "#F5F5F5",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        // https://github.com/tailwindlabs/tailwindcss-typography
    ],
};

// https://tailwindcss.com/docs/theme

//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
