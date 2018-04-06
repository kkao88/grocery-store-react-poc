import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './Search.js';
import './search.css'

const _ = require('lodash');

class SearchContainer extends Component {
    render (){
        //console.log('param category', this.props.match.params.id);
        //console.log('subcat category', this.props.match.params.subcatId);

        return (
            <Search searchText={this.props.searchText} onSearchSubmit={this.props.updateSearchQuery} />
        );
    }
}

// maps the redux state to the connected component's props
const mapStateToProps = (state) => {
    return {
        searchText: state.searchReducer.searchText,
        //selectedCategory: state.categoryReducer.selectedCategory
    };
};

// maps functions which dispatch actions to the connected component's props
const mapDispatchToProps = (dispatch) => {
    // NOTE: You can get the value of the search field with event.target.value.
    const updateSearchQuery = (srchTxt) => {
        dispatch({
            type: 'updateSearchQuery',
            payload: {
                searchText: srchTxt
            },
        })
    }

    return {
        updateSearchQuery
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
