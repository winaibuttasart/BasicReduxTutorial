import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import Test1Component from '../views/Test1Component/test1Component'
import Test2Component from '../views/Test2Component/test2Component';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <App {...props} />} />
            <Route exact path="/redirect" render={() => <Redirect to="/test" />} />
            <Route path="/test1" render={() => <Test1Component />} />
            <Route path="/test2" render={() => <Test2Component />} />
        </Switch>
    </BrowserRouter>
)