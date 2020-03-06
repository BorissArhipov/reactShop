import React from 'react';
import ItemsList from '../items-list/items-list';
import './item-list-container.css';

const ItemsListContainer = (items) => {
    return <ItemsList items={items.items}/>;
}

export default ItemsListContainer;
  
