import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app/app';
import ReactShopService from './components/services/react-shop-service';
import { ReactShopServiceProvider } from './components/react-shop-service-context/react-shop-service-contect';

const reactShopService = new ReactShopService();

ReactDOM.render(
    <Provider store={store}>
        <ReactShopServiceProvider value={reactShopService}>
            <App/> 
        </ReactShopServiceProvider>
    </Provider>,
document.getElementById('root'));

export default store;