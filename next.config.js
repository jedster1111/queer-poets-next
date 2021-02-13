module.exports = {
  webpack: (cfg) => {
    cfg.basePath = '/queer-poets-next'
    cfg.assetPrefix = '/queer-poets-next/'
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
