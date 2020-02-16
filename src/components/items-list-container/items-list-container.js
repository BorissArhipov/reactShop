import React, { Component } from 'react';
import { fetchItems } from '../../actions/fetch-actions';
import ItemsList from './../items-list/items-list';

import { withReactShopServiceContext } from './../hoc/with-react-shop-service-context';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from './../../utils/compose';

class ItemsListContainer extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {items, loading, error} = this.props;
        return (
            <div>
                <ItemsList items={items}/>
            </div>
        );
    }
}

const mapStateToProps = ({itemsList: {items, loading, error}}) => {
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
  
