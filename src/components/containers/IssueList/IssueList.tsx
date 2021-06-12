import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

type IssueType = {
  id: string;
  title: string;
  url: string;
  state: 'OPEN' | 'CLOSED';
  bodyHTML: string;
  body: string;
};

type IssueProps = {
  issue: IssueType;
};

const Issue = ({ issue }: IssueProps) => {
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
          <Heading size={'md'}>{issue.title}</Heading>
          <Text fontSize={'lg'}>{issue.body}</Text>
          <Link href={issue.url} color={'blue.500'}>
            View Issue
          </Link>
        </Box>
      </Box>
    </div>
  );
};

const IssueList = ({ issues }: { issues: IssueType[] }) => {
  return (
    <div>
      {issues.map((issue: IssueType) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
