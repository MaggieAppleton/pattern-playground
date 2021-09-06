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
                body: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                // Set in 1.25 typescle
                micro: "0.88rem",
                small: "1rem",
                base: "1.25rem",
                lg: "1.563rem",
                xl: "1.95rem",
                "2xl": "2.441rem",
                "3xl": "3.052rem",
                "4xl": "3.815rem",
                "5xl": "4.8rem",
                "6xl": "5.96rem",
                "7xl": "7.456rem",
            },
            colors: {
                ...colors,
                lightPink: "#fdf4f0",
                lavender: "#dadef1",
                darkBlue: "#230B5A",
                mediumBlue: "#544674",
                neutralBlue: "#847E9D",
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
