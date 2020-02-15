import React, { Component } from 'react';
import Header from '../app-header/app-header';

import 'normalize.css';
import './app.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div> 
        );  
    }
}

export default App;