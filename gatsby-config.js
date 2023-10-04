require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "mysticyogatravel",
    titleTemplate: "",
    description: "content hub for mysticism, yoga and traveling",
    url: "", // No trailing slash allowed!
    // image: "./src/images/favicon-256x256.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `react-device-detect`,
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
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
