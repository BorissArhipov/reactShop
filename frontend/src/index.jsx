import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app/app';
import ReactShopService from './components/services/react-shop-service';
import { ReactShopServiceProvider } from './components/react-shop-service-context/react-shop-service-context';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: 'https://reactshop.borissarhipov.me/graphql',
})

const reactShopService = new ReactShopService();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ReactShopServiceProvider value={reactShopService}>
                <Router>
                    <App/>
                </Router>
            </ReactShopServiceProvider>
        </Provider>
    </ApolloProvider>,   
document.getElementById('root'));

export {client};
export default store;