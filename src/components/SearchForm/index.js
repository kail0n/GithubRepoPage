import React, { Component } from 'react';
import { fetchUserProfile } from '../../actions/searchAction.js';
 

let userRepos = [];
class SearchForm extends Component {
    state = {username:""}

    handleSubmit = e => {
        e.preventDefault();
        const userRepos = fetchUserProfile(this.state.username)
        console.log(userRepos)
        }

    handleInputChange = e => {
        const username = e.target.value
        this.setState({ username }) 
        }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input id="textInput" type="text" placeholder="Enter your username" value={this.username} onChange={this.handleInputChange}></input>
                <input type="submit" value="Search User"></input>
                <div> {userRepos.map((repo) => {
                  return (<li key={repo}>{repo}</li>)})
                  }
                </div>
            </form>
        )
    }
    
}


export default (SearchForm)