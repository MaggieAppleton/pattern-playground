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
                body: ["IBM Plex Sans", ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                // Set in Perfect Fourth typescale (1.33)
                base: "1em",
                lg: "1.333em",
                xl: "1.777em",
                "2xl": "2.369em",
                "3xl": "3.157em",
                "4xl": "4.2em",
                "5xl": "5.61em",
            },
            colors: {
                ...colors,
                darkBlue: "#230B5A",
                mediumBlue: "#54496D",
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
