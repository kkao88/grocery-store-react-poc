import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './item.css';
import Item from './Item.js';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
    }

    findCategory(id) {
        return this.props.categoryList.find(function(category){
            return category.id == id;
        });
    }

    findSubcategory(catId, subcatId) {
        let category = this.props.categoryList.find(function(category){
            return category.id == catId;
        });
        return category.categories.find(function(subcat){
           return subcat.id == subcatId;
        });
    }

    render() {
        const match = this.props.match;
        let category;
        if (match.params.subcatId){
            category = this.findSubcategory(match.params.id, match.params.subcatId);
        }
        else {
            category = this.findCategory(match.params.id);
        }

        return (
            <Item
                category={category}
                onAddToCart={this.props.addToCart}
                itemList={this.props.itemList}
                searchText={this.props.searchText}
                />
        );
    }
}

// maps the redux state to the connected component's props
const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryReducer.categoryList,
        itemList: state.itemsReducer.itemList,
        searchText: state.searchReducer.searchText
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
