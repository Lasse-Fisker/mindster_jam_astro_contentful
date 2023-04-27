import { gql } from "@apollo/client";

export const fancyHeaderFragment = gql`
  fragment FancyHeaderBlock on FancyHeaderBlock {
    bgImage {
      url
      description
    }
    title
    text {
      json
    }
  }
`;
