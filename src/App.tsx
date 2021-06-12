import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Issues from './components/pages/Issues/Issues';
import IssueDetails from './components/pages/IssueDetails/IssueDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
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
    </Router>
  );
}

export default App;
