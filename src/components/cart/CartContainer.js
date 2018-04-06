import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Cart from './Cart.js';
import './cart.css'

const _ = require('lodash');

class CartContainer extends Component {
    render (){
        //console.log('param category', this.props.match.params.id);
        //console.log('subcat category', this.props.match.params.subcatId);

        return (
            <Cart items={this.props.items} onDeleteItemFromCart={this.props.deleteItemFromCart}/>
        );
    }
}

// maps the redux state to the connected component's props
const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items,
        //selectedCategory: state.categoryReducer.selectedCategory
    };
};

// maps functions which dispatch actions to the connected component's props
const mapDispatchToProps = (dispatch) => {
    // NOTE: You can get the value of the search field with event.target.value.
    const deleteItemFromCart = (itemId) => {
        dispatch({
            type: 'deleteItemFromCart',
            payload: {
                itemId: itemId
            },
        })
    }

    return {
        deleteItemFromCart
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
