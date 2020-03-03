import React from 'react';
import ItemsListContainer from '../items-list-container/items-list-container';

import './item-page.css';

const ItemPage = (items) => {
    return (
        <section className="home-page">
            <div className="container home-page__center">
                <ItemsListContainer items={items.items}/>
            </div>
        </section>
    );
}

export default ItemPage;