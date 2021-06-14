export type IssueStates = 'OPEN' | 'CLOSED' | undefined;

type IssueType = {
  id: string;
  title: string;
  url: string;
  state: 'OPEN' | 'CLOSED';
  bodyHTML: string;
  body: string;
};
