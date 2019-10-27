const withImage = require("next-images");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withImage({
    exportPathMap: function() {
      return {
        "/": { page: "/index" },
        "/watch": { page: "/watch" },
        "/participate": { page: "/participate" },
        "/speaker": { page: "/speaker" },
        "/contact": { page: "/contact" },
      };
    }
  })
);
