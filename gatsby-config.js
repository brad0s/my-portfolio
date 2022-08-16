module.exports = {
  siteMetadata: {
    siteUrl: 'https://bradenwright.gatsbyjs.io/',
    title: 'Braden Wright portfolio',
    description:
      'My name is Braden Wright and I am a developer. Look through my portfolio and see what I have done!',
    image: '/src/images/site-screenshot.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/bw-logo-white.svg',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
