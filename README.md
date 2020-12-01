## GithubRepoPage

This project is a GitHub repo tracker, so we can get an overview of our work without visiting the site itself.

## Requirements

- Your app should make use of React
- Your repo tracker should have an input for users to give their GitHub username
- After submitting their username, use the GitHub API to retrieve that user's list of repos
- When selecting a repo, a User should be shown some data about that repo eg. issue count, stargazers, forks etc.

NB: This usage of the GitHub API does not require authentication

## INSTALLATION

    Clone or download the repo.
    Open terminal
    Run npm install to install dependencies.

## USAGE

    Run npm start to launch server and react app.
    Run npm test to launch test suite.
    To get all the dependencies please make sure you run < npm install/>

## CHANGELOG

__mocks__
[x] add fileMock and styleMock for jest

index.html
[x] add <div id='root'></div>

NavBar
[x] add history.goBack method onClick of back button
[x] export withRouter

SearchBar
[x] add onChange={this.updateInput} for text input form (state.location updates)
[x] add e.preventDefault() to handleSubmit function

Reducers
[x] add default return state in searchReducer

App.js
[x] import About, Search and Welcome pages
[x] add component props to <Route>s (exact path='/' for root)

index.js
[x] add Provider tags
[x] fix <BrowserRouter> to <Router>

## BUGS

SearchForm
[] try to connect Search (page) and SearchForm unsuccessfully --> state updates in SearchForm but not in Redux store/Search page
[] try mSTP connect unsuccessfully
[] tests are not passing 
[] WDS says disconnected some of the time?

## WINS
    - mounting the website and seeing different pages via navbar
    - back button working

## CHALLENGES
    - search functionality

 