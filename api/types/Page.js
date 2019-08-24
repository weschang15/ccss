import { gql } from "apollo-server-express";

const Page = gql`
  type Page {
    _id: ID!
    name: String!
    url: String!
    stylesheet: Stylesheet!
  }

  type PageResponse {
    ok: Boolean!
    errors: [Error!]
    page: Page
  }

  input NewPageInput {
    name: String!
    siteId: String!
    url: String!
    viewport: [Int!]
  }

  input PageAddedInput {
    accountId: String!
    siteId: String!
  }

  extend type Mutation {
    createPage(input: NewPageInput!): PageResponse!
  }

  extend type Subscription {
    pageAdded(input: PageAddedInput!): Page
  }
`;

export default Page;
