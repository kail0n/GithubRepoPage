import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchForm extends Component {
    
    handleSubmit = e => {
        e.preventDefault();
         return ({[this.props.username]: e.target.value});
        };

    // handleInputChange = e => {
    //     this.setState({})
    // }

    render() {
        return(
            <form onSubmit={this.handleSubmit} username={""}>
                <input type="text" placeholder="Enter your username" ></input>
                <input type="submit" value="Search User"></input>
            </form>

        );
    };   
};

const mSTP = state => ({username: state.username});

export default connect(mSTP)(SearchForm);
