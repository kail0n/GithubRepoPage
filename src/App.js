import React from 'react';
import { Welcome, Search } from './pages';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layouts';
import Style from './Style.css'

function App() {
    return (
        <div id="app">
          
            < Header />
            <Switch>
                <Route exact path='/' component={Welcome}></Route>
                <Route path='/search' component={Search}></Route>
            </Switch>
            < Footer />
      

        </div>
    )
}

export default App;