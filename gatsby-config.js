module.exports = {
  siteMetadata: {
    title: "",
    titleTemplate: "",
    description: "",
    url: "", // No trailing slash allowed!
    image: "./src/images/favicon-256x256.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `we23sul8g558`,
      accessToken: `w9FVP1kYgU4h48tC0TtMA2jqAoFHXQ2Z-nq8YvLcqLk`,
    },
  },
  `gatsby-transformer-remark`,
  {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato']
        }
      }
    }
  ],
};
