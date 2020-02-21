import React, { Component } from 'react';
import Header from '../app-header/app-header';
import HomePage from './../home-page/home-page';
import { Route, Switch } from 'react-router-dom';
import CartPage from './../cart-page/cart-page';

import 'normalize.css';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app-body">
                <Header/>
                <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage}
                    exact />
                </Switch>
                
            </div> 
        );  
    }
}

export default App;