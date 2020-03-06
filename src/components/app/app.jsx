import React, { Component } from 'react';
import Header from '../app-header/app-header';
import ItemPage from '../item-page/item-page';
import { Route, Switch } from 'react-router-dom';
import CartPage from '../cart-page/cart-page';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/fetch-actions';
import { withReactShopServiceContext } from '../hoc/with-react-shop-service-context';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import ItemPageLinks from '../item-page-links/item-page-links';

import 'normalize.css';
import './app.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {itemsForPages, loading, error} = this.props;
        let routerCount = 1;
        let arrayOfPaths = []; 
        if(loading) {
            return(
                <div className="spinner-con">
                    <Spinner/>
                </div>
            );
        }
    
        if(error) {
            return(
                <div className="spinner-con">
                    <ErrorMessage/>
                </div>
            );
        }

        return (
            <div className="app-body">
                <Header/>
                <Switch>
                    {itemsForPages.map((items) => {
                        let path = routerCount;
                        routerCount += 1;
                        arrayOfPaths.push(path);
                        return(
                            <Route
                                path={`/${path === 1 ? '' : path}`}
                                render={() => {
                                    return(
                                        <ItemPage items={items}/>
                                    )}}
                                exact 
                                key={`page-${path}`}
                            />
                        )
                    })}
                    <Route
                        path="/cart"
                        component={CartPage}
                        exact />
                </Switch>
                <ItemPageLinks 
                    arrayOfPaths={arrayOfPaths}
                />
            </div> 
        );  
    }
}

const mapStateToProps = ({itemsListReducer: {itemsForPages, loading, error}}) => {
    return {itemsForPages, loading, error};
}

const mapDispatchToProps = (dispatch, { reactShopService }) => {
    return bindActionCreators({
        fetchItems: fetchItems(reactShopService)
    }, dispatch);
};
  
export default compose(
    withReactShopServiceContext(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
  