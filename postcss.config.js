module.exports = ({ env }) => ({
  plugins: [
    require("autoprefixer")({
      browsers: ["defaults", "not ie < 14", "last 2 versions", "> 1%", "iOS 7"],
    }),
    env === "production" ? require("cssnao") : null,
  ],
});
