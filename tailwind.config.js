module.exports = {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                image: "url('/images/background.png')",
                aboutus: "url('/images/thumb-about-us.png')",
                hireus: "url('/images/thumb-hire-us.png')",
            },
            fontSize: {
                base: "16px",
            },
        },
        fontFamily: {
            fontawesome: ["Font Awesome 5"],
            "bebas-neue": ["Bebas Neue", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
            raleway: ["Raleway", "sans-serif"],
        },
    },
    plugins: [],
};
