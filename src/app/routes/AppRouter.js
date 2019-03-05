import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';

// Routes
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

// Index Routes

import {
  Auth,
  Private, 
  Public
} from './Router';
import { NotFound } from '../components';

// Components

export const history = createHistory()

class RouterConfig extends Component {
  render() {
    return (
      <div>
         <Router history={history}>
            <div>
              <Switch>
                {
                  Public.map((R, k) => {
                    return <Route key={k} path={R.path} component={R.component} exact={R.exact}/>
                  })
                }
                {
                  Private.map((R, k) => {
                    return <PrivateRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
                  })
                }
                {
                  Auth.map((R, k) => {
                    return <AuthRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
                  })
                }
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
      </div>
    )
  }
}

export const AppRouter = RouterConfig;
