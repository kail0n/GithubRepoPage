import React, { Component } from 'react';
import { RepoResults } from '..';


class SearchForm extends Component {
    state = {
        username:"",
        userRepos: []
        }
        
        handleSubmit = e => {
            e.preventDefault();
            const inputValue = this.state.username;
                fetch(`https://api.github.com/users/${inputValue}/repos`)
                    .then(data => data.json())
                    .then((json)=>{this.setState({userRepos: json})})
                    .catch((err) => {
                        console.error(err.message)
                    })
        }

    handleInputChange = e => {
        const username = e.target.value
        this.setState({ username }) 
        }

    
        
    render() {
    
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input id="textInput" type="text" placeholder="Enter your username" value={this.username} onChange={this.handleInputChange}></input>
                    <input type="submit" value="Search User"></input>
                </form>
                <RepoResults repos={this.state.userRepos} />
            </>
        )
    }
    
}




export default (SearchForm)