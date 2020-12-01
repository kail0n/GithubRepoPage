import React from 'react';
import { Welcome, Search } from './pages';
import { Switch, Route } from 'react-router-dom';
 import { Header, Footer } from './layouts';

function App() {
    return (
        <div id="app">
            <header>
                < Header />
            </header>

            <Switch>
                <Route exact path='/' component={Welcome}></Route>
                <Route path='/search' component={Search}></Route>
            </Switch>

            <footer>
                < Footer />
            </footer>

        </div>
    )
}

export default App;