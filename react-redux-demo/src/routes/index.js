import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from '@/containers/home';
import ReselectDemo from '@/containers/reselect';
import ImmutableDemo from '@/containers/immutable';
import ReduxActionsDemo from '@/containers/redux-actions';

export default function () {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/reselect" component={ReselectDemo} />
      <Route exact path="/immutable" component={ImmutableDemo} />
      <Route exact path="/redux-actions" component={ReduxActionsDemo} />
    </BrowserRouter>
  );
}
