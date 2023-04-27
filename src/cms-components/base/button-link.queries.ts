import { gql } from "@apollo/client";

export const buttonLinkFragment = gql`
  fragment ButtonLink on Button {
    title
    text
    variant
    href
  }
`;
