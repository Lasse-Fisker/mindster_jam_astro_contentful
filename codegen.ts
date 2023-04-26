import type { CodegenConfig } from "@graphql-codegen/cli";

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const config: CodegenConfig = {
  schema: [
    {
      [URL]: {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    },
  ],
  documents: ["src/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
    },
  },
};

export default config;
