import { gql } from '@apollo/client';

export const GET_ISSUE_DETAILS = gql`
  query getIssueDetails($id: ID!) {
    __typename
    node(id: $id) {
      ... on Issue {
        id
        title
        body
        url
        comments(last: 10) {
          edges {
            node {
              id
              author {
                login
              }
              body
            }
          }
        }
      }
    }
  }
`;
