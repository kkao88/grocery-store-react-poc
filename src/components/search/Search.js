import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const _ = require('lodash');

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (!this.props.searchText && prevProps.searchText){ //clear out search bar on searchText change from external source
            this.setState({value: ''});
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSearchSubmit(this.state.value);
        this.props.history.push('/#');
    }

    render() {
        const { match, location, history } = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search</label>
                    <input id="search-input" value={this.state.value} onChange={this.handleChange}></input>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(Search);