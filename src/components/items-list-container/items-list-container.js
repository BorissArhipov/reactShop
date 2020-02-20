import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchItems } from '../../actions/fetch-actions';

import ItemsList from './../items-list/items-list';
import Spinner from './../spinner/spinner';
import ErrorMessage from './../error-message/error-message';
import { withReactShopServiceContext } from './../hoc/with-react-shop-service-context';

import './item-list-container.css';

class ItemsListContainer extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {items, loading, error} = this.props;

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

        return <ItemsList items={items}/>;
    }
}

const mapStateToProps = ({itemsListReducer: {items, loading, error}}) => {
    return {items, loading, error};
}

const mapDispatchToProps = (dispatch, { reactShopService }) => {
    return bindActionCreators({
        fetchItems: fetchItems(reactShopService)
    }, dispatch);
};
  
export default compose(
    withReactShopServiceContext(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsListContainer);
  
