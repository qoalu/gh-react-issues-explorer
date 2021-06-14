import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import IssueList from '../../elements/IssueList/IssueList';
import { Alert, Button, Heading, Spinner } from '@chakra-ui/react';
import { IssueStates } from '../../../types/Issue';
import { searchRepositoryIssues } from '../../../api/searchRepositoryIssues';
import {
  Issue,
  Maybe,
  PageInfo,
  SearchResultItemEdge,
} from '../../../generated/graphql';
import Filter from '../../containers/Filter/Filter';

interface RepoIssuesParameters {
  before?: Cursor;
  after?: Cursor;
  first: number | null;
  last: number | null;
  states?: IssueStates;
}

type ResponseData = {
  search: {
    pageInfo: PageInfo;
    issueCount: Number;
    edges: SearchResultItemEdge[];
  };
};

type Cursor = Maybe<string> | undefined;

function Issues() {
  const [limit] = useState<number>(2);
  const [filters, setFilters] = useState<{
    states: IssueStates;
    content: Maybe<string>;
  }>({
    states: undefined,
    content: 'global DOM event',
  });
  const [[before, after], setCursors] = useState<[Cursor, Cursor]>([
    undefined,
    undefined,
  ]);

  const { loading, error, data } = useQuery<ResponseData, RepoIssuesParameters>(
    searchRepositoryIssues('facebook/react', filters.states, filters.content),
    {
      variables: {
        before,
        after,
        first: !before ? limit : null,
        last: before ? limit : null,
      },
    }
  );

  const pageInfo = data?.search?.pageInfo;

  const issueList =
    data?.search?.edges.map((item): Issue => (item?.node as Issue) || null) ||
    [];

  const handleFetchNext = () => {
    setCursors([undefined, pageInfo?.endCursor]);
  };

  const handleFetchPrev = () => {
    setCursors([pageInfo?.endCursor, undefined]);
  };

  const refreshWithNewFilters = ({
    content,
    issueState,
  }: {
    issueState: IssueStates;
    content: Maybe<string>;
  }): void => {
    setCursors([undefined, undefined]);
    setFilters({ states: issueState, content });
  };

  return (
    <div>
      <Heading>Issues</Heading>
      <div>Filters:</div>
      <Filter onSubmit={refreshWithNewFilters} />
      {loading && (
        <>
          Loading...
          <Spinner />
        </>
      )}
      {error && <Alert status={'error'}>{`Error: ${error.message}`}</Alert>}
      <IssueList issues={issueList} />
      <Button disabled={!pageInfo?.hasPreviousPage} onClick={handleFetchPrev}>
        Prev page
      </Button>
      <Button disabled={!pageInfo?.hasNextPage} onClick={handleFetchNext}>
        Next page
      </Button>
    </div>
  );
}

export default Issues;
