import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './index.scss';

import BurgerDashboard from './components/BurgerDashboard';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BurgerDashboard} exact />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
