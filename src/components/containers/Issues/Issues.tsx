import React from 'react';
import { gql, useQuery } from '@apollo/client';

type Props = {
  list: string[];
};

const GET_USERNAME = gql`
  query {
    viewer {
      login
    }
  }
`;

function Issues(props: Props) {
  const { loading, error, data } = useQuery(GET_USERNAME);

  console.log(data);

  if (loading) return <>Loading...</>;
  if (error) return <>{`Error: ${error.message}`}</>;

  return <div>{data.viewer.login}</div>;
}

export default Issues;
