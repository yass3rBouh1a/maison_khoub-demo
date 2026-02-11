import type { Config } from 'tailwindcss';

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#96754a',
                'luxury-cream': '#FBF7F0', // Background Global
                'luxury-taupe': '#F2EBE3', // Surfaces Secondaires
                'luxury-black': '#2A2624', // Textes & Titres
                'luxury-border': '#E5DCD0', // Bordures
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
