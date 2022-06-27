module.exports = {
  siteMetadata: {
    title: `personal_page`,
    siteUrl: `https://kurecka.github.io`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-3S0058JXR5"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }
  ]
};