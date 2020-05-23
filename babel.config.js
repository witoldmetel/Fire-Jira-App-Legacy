module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        regenerator: true,
      },
    ],
  ],
};
