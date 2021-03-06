import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DocumentationPages from './app/AppContainer';

export default class Docs extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/GettingStarted/getting-started" />} />
        <Route exact path="/:location/:route" component={DocumentationPages} />
      </Switch>
    );
  }
}
