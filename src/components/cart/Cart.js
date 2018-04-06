import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const _ = require('lodash');

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    getItemBox(item){
        let that = this;

        return (
            <div key={item.id} className="item-box">
                <Link to={`/item/${item.id}`}>
                    <img className="item-image" alt={item.name} src={item.imageUrl}/>
                </Link>
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="btn" onClick={() => that.props.onDeleteItemFromCart(item.id)}>Remove from Cart</button>
            </div>
        )
    }

    displayItems(){
        let that = this;
        if (this.props.items.length){
            return (this.props.items.map(function(item){
                return that.getItemBox(item);
            }));
        }
        else {
            return <p>Is Empty</p>;
        }
    }

    getSubtotal(){
        if (this.props.items.length){
            return _.sum(this.props.items.map(function(item){
                return item.price * item.quantity;
            })).toFixed(2);
        }
        else {
            return '0.00';
        }
    }


    render() {
        return (
            <div className="cart-container">
                <h4>Your cart</h4>
                {this.displayItems()}
                <br/>
                <p>Subtotal: {this.getSubtotal()}</p>
                <br/>
                <button className={`btn ${this.props.items.length ? 'btn-primary' : 'btn-disabled'}`}>Checkout</button>
            </div>
        );
    }
}

export default Cart;