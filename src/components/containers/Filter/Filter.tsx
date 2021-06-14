import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { IssueStates } from '../../../types/Issue';
import { Maybe } from '../../../generated/graphql';

type Props = {
  onSubmit: (arg: { issueState: IssueStates; content: Maybe<string> }) => void;
};

const Filter = ({ onSubmit }: Props) => {
  const [issueState, setIssueState] = useState<IssueStates>(undefined);
  const [content, setContent] = useState<string>('');

  const onSearch = () => {
    onSubmit({ issueState, content });
  };
  return (
    <HStack spacing='8px' pb={4}>
      <Box flex={1}>
        <Input
          onChange={(event) => setContent(event.target.value)}
          placeholder='title or content'
          size='md'
        />
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button}>State: {issueState || 'NONE'}</MenuButton>
          <MenuList>
            <MenuItem onClick={() => setIssueState(undefined)}>NONE</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => setIssueState('OPEN')}>OPEN</MenuItem>
            <MenuItem onClick={() => setIssueState('CLOSED')}>CLOSED</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <IconButton
          aria-label='Search database'
          icon={<SearchIcon />}
          onClick={onSearch}
        />
      </Box>
    </HStack>
  );
};

export default Filter;
