import React, { Component } from 'react';
// import { fetchUserProfile } from '../../actions/searchAction.js';

class SearchForm extends Component {
    state = {
        username:"",
        userRepos: []
        }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     const inputValue = this.state.username;
    //      async const try {
    //         const resp = await fetch(`https://api.github.com/users/${inputValue}/repos`);
    //         const data = await resp.json();
    //         // if (data.status === 404) { throw Error(err.message) }
    //         console.log("this is: ", data)
    //         this.setState({ userRepos : data });   
    //     } catch(err) {
    //         throw new Error(err.message)
    //     }
        
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
                {/* <div> {this.state.userRepos}</div> */}
            </>
        )
    }
    
}



export default (SearchForm)