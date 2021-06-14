import React from 'react';
import { Issue } from '../../../generated/graphql';
import { IssueItem } from '../IssueItem/IssueItem';

const IssueList = ({ issues }: { issues: Issue[] }) => {
  return (
    <div>
      {issues.map((issue: Issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
