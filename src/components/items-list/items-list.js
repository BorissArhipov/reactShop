import React from 'react';
import Button from './../universal-button/universal-button';

import './item-list.css';

const ItemsList = ({items}) => {
    return (
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
                            <div className="items-list__con">
                                <Button className="items-list__btn-white">
                                    Viev
                                </Button>
                                <Button className="items-list__btn-blue">
                                    To cart
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>  
    );
}

export default ItemsList;