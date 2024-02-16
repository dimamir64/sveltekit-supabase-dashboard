/** @type {import('tailwindcss').Config}*/

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const svelteUx = require('svelte-ux/plugins/tailwind.cjs');

const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/svelte-ux/**/*.{svelte,js}'
    ],
    ux: {
        // See customization docs
        themes: {

            "light": {
                "color-scheme": "light",
                "primary": "hsl(28.9412 100% 50%)",
                "secondary": "oklch(69.71% 0.329 342.55)",
                "secondary-content": "oklch(98.71% 0.0106 342.55)",
                "accent": "oklch(76.76% 0.184 183.61)",
                "neutral": "#2B3440",
                "neutral-content": "#D7DDE4",
                "surface-100": "oklch(100% 0 0)",
                "surface-200": "#F2F2F2",
                "surface-300": "#E5E6E6",
                "surface-content": "#1f2937"
            },
            "dark": {
                "color-scheme": "dark",
                "primary": "oklch(65.69% 0.196 275.75)",
                "secondary": "oklch(74.8% 0.26 342.55)",
                "accent": "oklch(74.51% 0.167 183.61)",
                "neutral": "#2a323c",
                "neutral-content": "#A6ADBB",
                "surface-100": "#1d232a",
                "surface-200": "#191e24",
                "surface-300": "#15191e",
                "surface-content": "#A6ADBB"
            }

        },
    },

    theme: {
        extend: {}
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
        require('tailwind-scrollbar'),
        svelteUx, // Can also call with colorSpace options],
    ],

    daisyui: {
        themes: ['dark', 'light', 'black', 'business']
    }
};

module.exports = config;