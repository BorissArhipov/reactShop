import React from 'react';
import { Link } from 'react-router-dom';

import './item-page-links.css';

const ItemPageLinks = (paths) => {
    if(!paths.arrayOfPaths.length) {
        return null;
    }
    return (
        <div className="item-page-links__con">
            {paths.arrayOfPaths.map(path => {
                return (
                    <Link 
                        key={`link-${path}`} 
                        to={`/${path === 1 ? '' : path}`}
                    >
                        <span className="item-page-links__link">
                            {path}
                        </span>
                    </Link>
                );
            })}
        </div>
        
    );
}

export default ItemPageLinks;