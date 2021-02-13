module.exports = {
  env: {
    assetPrefix: '/queer-poets-next/',
  },
  basePath: '/queer-poets-next',
  assetPrefix: '/queer-poets-next/',
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
