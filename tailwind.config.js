import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-color": "#ff6347", // Custom color you can use throughout
                "custom-background": "#ff6347", // Custom background color
            },
            fontFamily: {
                custom: ['"Roboto"', "sans-serif"], // Adding a custom font
            },
        },
    },
    daisyui: {
        themes: [
            "light", // Predefined light theme
            "dark", // Predefined dark theme
            {
                mytheme: {
                    primary: "#ff6347", // Custom primary color
                    secondary: "#00aaff", // Custom secondary color
                    accent: "#34d399", // Custom accent color
                    neutral: "#2a2a2a", // Neutral background color
                    "base-100": "#f8f8f8", // Background for your base color (main sections)
                    info: "#2196F3", // Info color
                    success: "#4CAF50", // Success color
                    warning: "#ff9800", // Warning color
                    error: "#f44336", // Error color
                },
            },
        ],
    },
    plugins: [daisyui],
};
