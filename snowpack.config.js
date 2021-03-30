// snowpack.config.js

module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-svelte'
  ],
}