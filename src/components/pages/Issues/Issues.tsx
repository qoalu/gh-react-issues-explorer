import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import IssueList from '../../containers/IssueList/IssueList';
import { Alert, Button, Heading } from '@chakra-ui/react';
import { GET_REPOSITORY_ISSUES } from '../../../api/getRepositoryIssues';

function Issues() {
  const [limit] = useState(20);
  const [[before, after], setCursors] = useState([null, null]);

  const { loading, error, data } = useQuery(GET_REPOSITORY_ISSUES, {
    variables: {
      before,
      after,
      limit,
    },
  });

  const pageInfo = data?.repository?.issues?.pageInfo;

  const handleFetchNext = () => {
    setCursors([null, data.repository.issues.pageInfo.endCursor]);
  };

  const handleFetchPrev = () => {
    setCursors([data.repository.issues.pageInfo.endCursor, null]);
  };

  if (loading) return <>Loading...</>;
  if (error) return <Alert status={'error'}>{`Error: ${error.message}`}</Alert>;

  return (
    <div>
      <Heading>Issues</Heading>
      <IssueList issues={data.repository.issues.nodes} />
      <Button disabled={!pageInfo.hasPreviousPage} onClick={handleFetchPrev}>
        Prev page
      </Button>
      <Button disabled={!pageInfo.hasNextPage} onClick={handleFetchNext}>
        Next page
      </Button>
    </div>
  );
}

export default Issues;
