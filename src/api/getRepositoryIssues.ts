import { gql } from '@apollo/client';

export const GET_REPOSITORY_ISSUES = gql`
  query GetRepositoryIssues(
    $limit: Int = 20
    $before: String
    $after: String
    $states: [IssueState!] = null
  ) {
    repository(name: "react", owner: "facebook") {
      id
      isPrivate
      issues(
        first: $limit
        after: $after
        before: $before
        states: $states
        orderBy: { field: CREATED_AT, direction: ASC }
      ) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          id
          title
          url
          state
          bodyHTML
          body
        }
      }
    }
  }
`;
