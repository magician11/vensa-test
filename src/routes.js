import React from 'react';
import { Route, IndexRoute } from 'react-router';
import VensaDashboard from './components/VensaDashboard';
import Inbox from './components/Inbox';
import Todo from './components/Todo';
import Home from './components/Home';

export default (
  <Route path="/" component={VensaDashboard}>
    <IndexRoute component={Home} />
    <Route path="/message" component={Inbox} />
    <Route path="/todo/:todoPage" component={Todo} />
  </Route>
);
