import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Issue } from '../../../generated/graphql';
/* eslint-disable no-underscore-dangle */
type IssueProps = {
  issue: Issue;
};
export const IssueItem = ({ issue }: IssueProps) => {
  return (
    <div>
      <Box
        bg='gray.50'
        w='100%'
        borderRadius={'lg'}
        p={4}
        mb={4}
        color='gray.900'
      >
        <Box p='6'>
          <Box pb={'2'}>
            <Text color={'gray.500'} fontSize='xs'>
              {issue.__typename}
            </Text>
          </Box>
          <Box pb={'2'}>
            <Heading size={'sm'}>{issue.title}</Heading>
            <Text fontSize={'sm'}>{issue.body.substr(0, 200)}</Text>
          </Box>
          <Link
            href={`/issues/${issue.id}`}
            color={'green.500'}
            fontSize={'xs'}
          >
            View Issue here
          </Link>
          <Link href={issue.url} color={'blue.500'} fontSize={'xs'}>
            View Issue on Github
          </Link>
        </Box>
      </Box>
    </div>
  );
};
