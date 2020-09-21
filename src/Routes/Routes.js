import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom'
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/cart/' exact component={Cart}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        )
    }
}


export default Routes;