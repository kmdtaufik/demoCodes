module.exports = {
    content: [
        "./index.html",
    ],
    theme: {
        extend: {
            keyframes: {
                'fade': {
                    '0% ': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                'fade': 'fade 1.5s',
            },
        },
    },
    plugins: [],
}
