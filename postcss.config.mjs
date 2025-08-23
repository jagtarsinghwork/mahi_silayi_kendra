/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ yaha tailwind ke plugin ka naya package
    autoprefixer: {},
  },
};

export default config;
