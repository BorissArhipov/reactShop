import React from 'react';

const ItemsList = ({items}) => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={{backgroundImage: `url(${item.coverImage})`}}></div>
                        <p>
                            {item.title}
                        </p>
                        <p>
                            {item.price}
                        </p>
                    </div>
                );
            })}
        </div>   
    );
}

export default ItemsList;