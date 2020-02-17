import React from 'react';

import './item-list.css';

const ItemsList = ({items}) => {
    return (
        <div className="items-list__con">
            <div className="items-list">
                {items.map((item) => {
                    return (
                        <div className="items-list__item" key={item.id}>
                            <div className="items-list__img" style={{backgroundImage: `url(${item.coverImage})`}}></div>
                            <p className="items-list__title">
                                {item.title}
                            </p>
                            <p className="items-list__price">
                                {item.price} &euro;
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>    
    );
}

export default ItemsList;