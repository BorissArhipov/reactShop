import React, { Component } from 'react';
import fetchItems from '../../actions/fetch-actions';

import withReactShopServiceContext from './../hoc/with-react-shop-service-context';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

class ItemsListContainer extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
}

const mapDispatchToProps = (dispatch, { reactShopService }) => {

        return bindActionCreators({
            fetchItems: fetchItems(reactShopService)
        }, dispatch);
    };
  
    export default compose(
        withReactShopServiceContext(),
        connect(mapDispatchToProps, { fetchItems })
    )(ItemsListContainer);
  
