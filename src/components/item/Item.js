import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const _ = require('lodash');

class Item extends Component {
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
                <p>{item.price}</p>
                <button className="btn" onClick={() => that.props.onAddToCart(item)}>Add to Cart</button>
            </div>
        )
    }

    displayItems(){
        let that = this;
        if (this.props.searchText){ //if search text, display all items that match the search critera regardless of category
            return this.props.itemList.filter(item => item.searchTerms.includes(this.props.searchText.toLowerCase())).map(item => that.getItemBox(item));
        }
        else if (this.props.category){ //if category or subcategory, list all items in that cat/subcat
            if (this.props.category.categories){
                return _.flatMapDeep(this.props.category.categories, function(subcategory){return subcategory.items}).map(function(item) {
                    return that.getItemBox(item);
                });
            }
            else if (this.props.category.items){
                return (this.props.category.items.map(function(item){
                    return that.getItemBox(item);
                }));
            }
        }
        else if (this.props.itemList){ //if no category, list all items
            return (this.props.itemList.map(function(item){
                return that.getItemBox(item);
            }));
        }
        else {
            return '';
        }
    }

    getHeader() {
        if (this.props.searchText){
            return `Search Results for ${this.props.searchText}`;
        }
        else {
            return this.props.category ? this.props.category.name : '';
        }
    }

    render() {
        return (
            <div className="item-container">
                <h2 className="item-header">{this.getHeader()}</h2>
                <div className="item-container-internal">{this.displayItems()}</div>
            </div>
        );
    }
}

export default Item;