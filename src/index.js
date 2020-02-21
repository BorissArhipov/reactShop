import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app/app';
import ReactShopService from './components/services/react-shop-service';
import { ReactShopServiceProvider } from './components/react-shop-service-context/react-shop-service-context';
import { BrowserRouter as Router } from 'react-router-dom';

const reactShopService = new ReactShopService();

ReactDOM.render(
    <Provider store={store}>
        <ReactShopServiceProvider value={reactShopService}>
            <Router>
                <App/>
            </Router>
        </ReactShopServiceProvider>
    </Provider>,
document.getElementById('root'));

export default store;