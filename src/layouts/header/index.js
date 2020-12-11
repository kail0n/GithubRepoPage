import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    return (
        <>
            <h1 id="app-header"> Github Repos! </h1>
            <nav className="navbar">
                <NavLink exact to="/" className="navlink" activeClassName="current">Welcome</NavLink>
                <NavLink to="/search" className="navlink" activeClassName="current">Search</NavLink>
                <button id="back-button" onClick={history.goBack}>Back</button>
            </nav>
        </>
    );
}

export default withRouter(Header);