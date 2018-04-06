import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Vertical from './Vertical.js';
import './vertical.css'

const _ = require('lodash');

class VerticalContainer extends Component {
    render (){
        //console.log('param category', this.props.match.params.id);
        //console.log('subcat category', this.props.match.params.subcatId);

        return (
            <div className="vertical-container">
                <h3>Categories</h3>
                {this.props.categoryList.map((category, i) => {
                    return (<Vertical key={category.id} category={category} paramCategory={this.props.match.params.id} onClearSearch={this.props.clearSearchQuery}
                        />)
                })}
            </div>
        );
    }
}

const isSelectedCategory = (selectedCategory, category) => {
  return selectedCategory && (_.get(selectedCategory, 'id') === _.get(category, 'id'));
};

// maps the redux state to the connected component's props
const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryReducer.categoryList,
        //selectedCategory: state.categoryReducer.selectedCategory
    };
};

// maps functions which dispatch actions to the connected component's props
const mapDispatchToProps = (dispatch) => {

    const clearSearchQuery = () => {
        dispatch({
            type: 'clearSearchQuery',
            payload: {}
        })
    };

    return {
        clearSearchQuery
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalContainer);
