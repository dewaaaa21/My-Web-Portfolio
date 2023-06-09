/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{html,js}', './pages/**/*.{html,js}', './index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#a460f9',
                secondary: '#181818',
                third: '#18181b',
                four: '#eab308',
                five: '#52525b',
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
