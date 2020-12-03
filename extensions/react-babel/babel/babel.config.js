module.exports = {
  presets: [
    require.resolve("@babel/preset-react"),
    [
      require("@babel/preset-env"),
      {
        targets: {
          node: 12,
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
  plugins: [require.resolve('@babel/plugin-proposal-class-properties')],
  sourceMaps: true,
};
