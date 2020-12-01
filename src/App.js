import React from 'react';
import { SearchForm } from './components';
import { Welcome } from './pages'
import {Footer, Header} from './layout'

function App() {
    return (
        <div id="app">
            < Header />
            < Welcome />
            < SearchForm />
            < Footer />
        </div>
    )
}

export default App;