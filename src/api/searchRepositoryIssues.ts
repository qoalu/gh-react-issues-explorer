import { gql } from '@apollo/client';
import { IssueStates } from '../types/Issue';
import { Maybe } from '../generated/graphql';

export const searchRepositoryIssues = (
  repo: String = 'facebook/react',
  state: IssueStates = undefined,
  search?: Maybe<String>
) => {
  const stateFilter: String = state ? `is:${state}` : ``;
  const contentFilter: String = search ? `in:title,body ${search}` : ``;

  return gql`
  query SearchRepositoryIssues(
    $first: Int = 20
    $last: Int = 0
    $before: String
    $after: String
  ) {
    search(
      query: "repo:${repo} ${stateFilter} ${contentFilter}"
      type: ISSUE
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      issueCount
      edges {
        cursor
        node {
          ... on Issue {
            __typename
            id
            title
            url
            body
          }
          ... on PullRequest {
            __typename
            id
            title
            url
            body
          }
        }
      }
    }
  }
`;
};
