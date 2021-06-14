import { GET_ISSUE_DETAILS } from '../getIssueDetails';

export const mock = [
  {
    request: {
      query: GET_ISSUE_DETAILS,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        __typename: 'Query',
        node: {
          id: '1',
          title: 'Bug: Focus shift on click is delayed/laggy',
          body: "I've noticed a bug in apps built with React, & am able to reproduce it even on WhatsApp Web.\r\n\r\nIf i click on another field/element _very quickly_ after entering some text in a certain field, the focus doesn’t shift to the field/element i clicked on. Also, if i click on some other field/element while continuing to type in a certain field, the focus never shift. The focus shifts only if i click 1 whole second after i have stopped typing.\r\n\r\nIs this bug a feature?",
          url: 'https://github.com/facebook/react/issues/21678',
          comments: {
            edges: [
              {
                node: {
                  id: 'MDEyOklzc3VlQ29tbWVudDg2MDc4OTIxNw==',
                  author: {
                    login: 'XtremePwnership',
                    __typename: 'User',
                  },
                  body: 'Woops seems like this is just the behaviour of DOM or smthg, not exclusive to React.\r\n',
                  __typename: 'IssueComment',
                },
                __typename: 'IssueCommentEdge',
              },
            ],
            __typename: 'IssueCommentConnection',
          },
          __typename: 'Issue',
        },
      },
    },
  },
];
