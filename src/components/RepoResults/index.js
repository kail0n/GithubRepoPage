import React, {Component} from 'react';


export default class RepoResults extends Component{
    
    render(){
        console.log(this.props.repos)
        return(
        <>
            <h1>Search results:</h1>
            <ol>{this.props.repos.map((repo)=> <li key={repo.id}>{repo.name}</li>)}
            </ol>
        </>
        );
    }
}


