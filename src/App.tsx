import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Issues from './components/containers/Issues/Issues';
import IssueDetails from './components/containers/IssueDetails/IssueDetails';
import { Box } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

function App() {
  const list = ['a', 'b'];

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
          </Box>
          <Switch>
            <Route path='/issues/:id'>
              <IssueDetails />
            </Route>
            <Route path={['/issues', '/']}>
              <Issues list={list} />
            </Route>
          </Switch>
          <div>
            <h1>Issues</h1>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
