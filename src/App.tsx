import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Issues from './components/pages/Issues/Issues';
import IssueDetails from './components/pages/IssueDetails/IssueDetails';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        Issues Browser
        <Switch>
          <Route path='/issues/:id'>
            <IssueDetails />
          </Route>
          <Route path={['/issues', '/']}>
            <Issues />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
