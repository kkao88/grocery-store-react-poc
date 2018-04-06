import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemDetail from './ItemDetail.js';

class ItemDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    findItem(id) {
        return this.props.items.find(function(item){
            return item.id == id;
        });
    }

    render() {
        const category = this.props.category;
        const match = this.props.match;
        const item = this.findItem(match.params.id);

        return (
            <ItemDetail
                category={category}
                item={item}
                onAddToCart={this.props.addToCart}
                />
        );
    }
}

// maps the redux state to the connected component's props
const mapStateToProps = (state) => {
    return {
        category: state.categoryReducer.selectedCategory,
        items: state.itemsReducer.itemList
    };
};

// maps functions which dispatch actions to the connected component's props
const mapDispatchToProps = (dispatch) => {
    // NOTE: You can get the value of the search field with event.target.value.
    const addToCart = (item) => {
        dispatch({
            type: 'addToCart',
            payload: {
                item: item
            },
        })
    }

    return {
        addToCart
    };
};

export default connect(mapStateToProps, mapDispatchToProps )(ItemDetailContainer);
