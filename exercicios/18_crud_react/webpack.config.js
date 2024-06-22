module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.22",
      }
    ]
  ],
  plugins: ["@babel/plugin-proposal-optional-chaining"]
};