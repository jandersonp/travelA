import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Success from '../pages/Success';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/success" component={Success} />
    </Switch>
  );
};

export default Routes;
