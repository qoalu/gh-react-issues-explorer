import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ISSUE_DETAILS } from '../../../api/getIssueDetails';
import { Issue, IssueCommentEdge, Maybe } from '../../../generated/graphql';
import { IssueItem } from '../../elements/IssueItem/IssueItem';
import { Alert, Box, Heading, Spinner, Text } from '@chakra-ui/react';

type ParamsType = {
  id: string;
};

type ResponseDataType = {
  node: Issue;
};

function IssueDetails() {
  const { id } = useParams<ParamsType>();
  const { loading, error, data } = useQuery<ResponseDataType, ParamsType>(
    GET_ISSUE_DETAILS,
    {
      variables: {
        id,
      },
    }
  );

  const comments: Maybe<IssueCommentEdge>[] = data?.node?.comments?.edges || [];

  return (
    <div>
      <Heading>Issue Details</Heading>
      {loading && (
        <>
          Loading...
          <Spinner />
        </>
      )}
      {data && (
        <>
          <IssueItem issue={data.node} />
          <Heading>Comments {comments.length}</Heading>

          {comments.length > 0 && (
            <>
              <Box
                bg='gray.50'
                w='100%'
                borderRadius={'lg'}
                p={4}
                mb={4}
                color='gray.900'
              >
                {comments.map((comment: Maybe<IssueCommentEdge>) => (
                  <div>
                    <Text fontWeight={'bold'}>
                      {comment?.node?.author?.login}
                    </Text>
                    {comment?.node?.body}
                  </div>
                ))}
              </Box>
            </>
          )}
        </>
      )}
      {error && <Alert status={'error'}>{`Error: ${error.message}`}</Alert>}
    </div>
  );
}

export default IssueDetails;
