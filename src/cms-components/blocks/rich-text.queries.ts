import { gql } from "@apollo/client";

export const richTextBlockFragment = gql`
  fragment RichTextBlock on RichTextBlock {
    title
    text {
      json
    }
  }
`;
