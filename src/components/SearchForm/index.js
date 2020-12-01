import React, { Component } from 'react';


class SearchForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('Submit')
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your username"></input>
                <input type="submit" value="Search User"></input>
            </form>

        );
    };   
};

export default SearchForm;
