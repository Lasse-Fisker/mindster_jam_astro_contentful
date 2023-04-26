const dotenv = require("dotenv");

dotenv.config({
  path: __dirname + "/.env",
});

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

module.exports = {
  schema: {
    [url]: {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  },
  extensions: {
    endpoints: {
      default: {
        url,
      },
    },
  },
};
