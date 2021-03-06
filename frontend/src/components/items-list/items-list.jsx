import React, {Component} from 'react';
import Button from '../universal-elements/universal-button';
import { connect } from 'react-redux';
import { toCart } from '../../actions/toCart';


import './item-list.css';


class ItemsList extends Component {
    render() {
        const {items, toCart} = this.props;
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
                                        <Button 
                                            onClick={() => {toCart({title: item.title, id: item.id, price: item.price})}}
                                            className="items-list__btn-blue"
                                        >
                                            To cart
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>  
            );
    }
    
}
export default connect(null, { toCart })(ItemsList);