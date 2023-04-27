import { gql } from "@apollo/client";
import { richTextBlockFragment } from "../cms-components/blocks/rich-text.queries";
import { fancyHeaderFragment } from "../cms-components/blocks/fancy-header.queries";

export const getAllPagesQuery = gql`
  query GetAllPages {
    pageCollection {
      items {
        sys {
          id
        }
        path
      }
    }
  }
`;

export const pageFragment = gql`
  fragment Page on Page {
    title
    path
    blocksCollection {
      items {
        ... on RichTextBlock {
          ...RichTextBlock
        }
        ... on FancyHeaderBlock {
          ...FancyHeaderBlock
        }
      }
    }
  }
  ${fancyHeaderFragment}
  ${richTextBlockFragment}
`;

export const getPageByIdQuery = gql`
  query GetPageById($id: String!) {
    page(id: $id) {
      ...Page
    }
  }
  ${pageFragment}
`;
