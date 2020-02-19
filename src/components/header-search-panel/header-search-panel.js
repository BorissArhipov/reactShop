import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from './../universal-elements/universal-input';


import './header-search-panel.css';

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="search-panel__con">
                <FontAwesomeIcon className="search-panel__img" icon={faSearch} />
                <Input
                    className="search-panel__input"
                    placeholder="Type to search" 
                />
            </div> 
        );
    }
}