import React from 'react';
import { SearchForm } from '../../components';
import { RepoResults } from '../../components'

function Search() {
    return (
        <div id="Search">
            < SearchForm />
            < RepoResults />
        </div>
    )
}

export default Search;