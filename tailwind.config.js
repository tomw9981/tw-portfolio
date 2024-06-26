/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Electrolize", "sans-serif"],
                sans: ["Roboto", "sans-serif"],
            },
            colors:{
                accent: "#6b26fc"
            }
        },
    },
    plugins: [],
};
