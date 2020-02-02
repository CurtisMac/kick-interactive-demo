module.exports = {
  siteMetadata: {
    title: `Kick Demo`,
    description: `Chandler's Kitchens is the ultimate destination for bespoke kitchen design and fitting services`,
    author: "Curtis MacLeod",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kick Interative Demo`,
        short_name: `Kick`,
        start_url: `/`,
        background_color: `#0e4a66`,
        theme_color: `#0e4a66`,
        display: `minimal-ui`,
        icon: `src/images/logo_alt.png`,
      },
    },
  ],
}
