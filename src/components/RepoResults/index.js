import React, {Component} from 'react';


export default class RepoResults extends Component{
    
    render(){
        console.log(this.props.repos)
        return(
            <>
                <h2>Search results:</h2>
                <div className="RepoContainer"> {this.props.repos.map((repo) => 
                        <ol key={repo.id + "container"}>  
                            <li key={repo.id + "a"}><a href={repo.url}>{repo.name}</a></li>
                            <li key={repo.id + "b"}>Fork Count: {repo.forks_count}</li>
                            <li key={repo.id + "c"}>Stargazer Count: {repo.stargazers_count}</li>
                            <li key={repo.id + "d"}>Issue count: {repo.open_issues_count}</li>
                        </ol> 
                    )} 
                </div>
             </>
        );
    };
};
