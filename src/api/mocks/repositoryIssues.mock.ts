import { GET_REPOSITORY_ISSUES } from '../getRepositoryIssues';

export const mock = [
  {
    request: {
      query: GET_REPOSITORY_ISSUES,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];
