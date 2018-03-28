import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;