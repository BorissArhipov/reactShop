import React, { Component } from 'react';
import Header from '../app-header/app-header';
import HomePage from './../home-page/home-page';

import 'normalize.css';
import './app.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePage/>
            </div> 
        );  
    }
}

export default App;