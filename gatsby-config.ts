import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `serverless-space`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-162895221-1"
    }
  }, "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};

export default config;
