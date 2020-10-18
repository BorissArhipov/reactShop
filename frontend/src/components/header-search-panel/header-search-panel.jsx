import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from '../universal-elements/universal-input';
import { changeSearchWord } from '../../actions/changeSearchWord';
import { connect } from 'react-redux';


import './header-search-panel.css';

class SearchPanel extends Component {
    render() {
        const { changeSearchWord } = this.props;
        return (
            <div className="search-panel__con">
                <FontAwesomeIcon className="search-panel__img" icon={faSearch} />
                <Input
                    className="search-panel__input"
                    placeholder="Type to search"
                    onChange={(e) => {changeSearchWord(e.target.value)}}
                />
            </div> 
        );
    }
}

export default connect(null, { changeSearchWord })(SearchPanel);