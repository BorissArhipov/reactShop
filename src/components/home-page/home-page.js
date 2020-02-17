import React from 'react';
import ItemsListContainer from './../items-list-container/items-list-container';

import './home-page.css';

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="container home-page__center">
                <ItemsListContainer/>
            </div>
        </section>
    );
}

export default HomePage;