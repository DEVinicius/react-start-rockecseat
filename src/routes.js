import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main'
import Data from './pages/data'

const Routes = () => (
    <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Main}/> 
           <Route exact path="/data/:id" component={Data}/> 
        </Switch>
    </BrowserRouter>
)

export default Routes;