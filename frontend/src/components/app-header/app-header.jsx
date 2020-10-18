import React, { Component } from 'react';
import SearchPanel from '../header-search-panel/header-search-panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './app-header.css';

class Header extends Component {
    render() {
        const {count} = this.props;
        return (
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <Link to="/">
                            <div className="header__logo">
                                <FontAwesomeIcon className="header__img" icon={faStore} />
                                <p className="header__logo-text">
                                    ReactShop
                                </p>
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="header__con">
                                <FontAwesomeIcon className="header__cart" icon={faShoppingCart} />
                                <div className="header__count">
                                    {count}
                                </div>
                            </div>
                        </Link>
                        <SearchPanel/>
                    </nav>  
                </div>
                 
            </header>
        );
    }
}

const mapStateToProps = ({cartReducer: {count}}) => {
    return {count};
}

export default connect(mapStateToProps)(Header);