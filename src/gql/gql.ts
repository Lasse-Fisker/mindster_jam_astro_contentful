/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ButtonLink on Button {\n    title\n    text\n    variant\n    href\n  }\n": types.ButtonLinkFragmentDoc,
    "\n  fragment FancyHeaderBlock on FancyHeaderBlock {\n    bgImage {\n      url\n      description\n    }\n    title\n    text {\n      json\n    }\n  }\n": types.FancyHeaderBlockFragmentDoc,
    "\n  fragment RichTextBlock on RichTextBlock {\n    title\n    text {\n      json\n    }\n  }\n": types.RichTextBlockFragmentDoc,
    "\n  query GetAllPages {\n    pageCollection {\n      items {\n        sys {\n          id\n        }\n        path\n      }\n    }\n  }\n": types.GetAllPagesDocument,
    "\n  fragment Page on Page {\n    title\n    path\n    blocksCollection {\n      items {\n        ... on RichTextBlock {\n          ...RichTextBlock\n        }\n        ... on FancyHeaderBlock {\n          ...FancyHeaderBlock\n        }\n      }\n    }\n  }\n  \n  \n": types.PageFragmentDoc,
    "\n  query GetPageById($id: String!) {\n    page(id: $id) {\n      ...Page\n    }\n  }\n  \n": types.GetPageByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ButtonLink on Button {\n    title\n    text\n    variant\n    href\n  }\n"): (typeof documents)["\n  fragment ButtonLink on Button {\n    title\n    text\n    variant\n    href\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FancyHeaderBlock on FancyHeaderBlock {\n    bgImage {\n      url\n      description\n    }\n    title\n    text {\n      json\n    }\n  }\n"): (typeof documents)["\n  fragment FancyHeaderBlock on FancyHeaderBlock {\n    bgImage {\n      url\n      description\n    }\n    title\n    text {\n      json\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment RichTextBlock on RichTextBlock {\n    title\n    text {\n      json\n    }\n  }\n"): (typeof documents)["\n  fragment RichTextBlock on RichTextBlock {\n    title\n    text {\n      json\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPages {\n    pageCollection {\n      items {\n        sys {\n          id\n        }\n        path\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPages {\n    pageCollection {\n      items {\n        sys {\n          id\n        }\n        path\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Page on Page {\n    title\n    path\n    blocksCollection {\n      items {\n        ... on RichTextBlock {\n          ...RichTextBlock\n        }\n        ... on FancyHeaderBlock {\n          ...FancyHeaderBlock\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  fragment Page on Page {\n    title\n    path\n    blocksCollection {\n      items {\n        ... on RichTextBlock {\n          ...RichTextBlock\n        }\n        ... on FancyHeaderBlock {\n          ...FancyHeaderBlock\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPageById($id: String!) {\n    page(id: $id) {\n      ...Page\n    }\n  }\n  \n"): (typeof documents)["\n  query GetPageById($id: String!) {\n    page(id: $id) {\n      ...Page\n    }\n  }\n  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;