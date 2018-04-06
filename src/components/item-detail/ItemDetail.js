import React, { Component } from 'react';
import './item-detail.css'

const _ = require('lodash');

class Item extends Component {
    constructor(props) {
        super(props);
    }

    getItemBox(item){
        let that = this;
        return (
            <div key={item.id} className="item-box">
                <h2>{item.name}</h2>
                <img className="item-image" alt={item.name} src={item.imageUrl}/>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button className="btn" onClick={() => that.props.onAddToCart(item)}>Add to Cart</button>
            </div>
        )
    }

    render() {
        return (
            <div className="item-detail-container">
                {this.props.item ? this.getItemBox(this.props.item) : ''}
            </div>
        );
    }
}

export default Item;