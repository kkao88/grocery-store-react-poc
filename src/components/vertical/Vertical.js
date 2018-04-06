import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const _ = require('lodash');

class Vertical extends Component {
    constructor(props) {
        super(props);
    }

    selectVertical = function(input) {
        this.props.onChange(input);
    };

    isSelectedCategory = function(){
      return this.props.paramCategory == this.props.category.id;
    };

    listSubcategories = function(){
        let that = this;
        if (this.props.category && this.isSelectedCategory() && this.props.category.categories){
            return this.props.category.categories.map(function(subcat, i){
                return (
                    <li key={subcat.id}>
                        <Link to={`/category/${that.props.category.id}/${subcat.id}`} onClick={that.props.onClearSearch}>
                            <button className="btn">{subcat.name}</button>
                        </Link>
                    </li>
                );
            });
        }
        else {
            return '';
        }
    };

    render() {
        return (
            <div>
                <span>{this.isSelectedCategory() ? '->' : ''}</span>
                <Link to={`/category/${this.props.category.id}`} onClick={this.props.onClearSearch}>
                    <button className="btn">{this.props.category.name}</button>
                </Link>
                <ul>{this.listSubcategories()}</ul>
            </div>
        );
    }
}

export default Vertical;