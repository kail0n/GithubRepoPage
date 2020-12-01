import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';



const Header = ({ history }) => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Welcome</NavLink>
            <NavLink to="/search" activeClassName="current">Search</NavLink>
            <button id="back-button" onClick={history.goBack}>Back</button>
        </nav>
    );
}

export default withRouter(Header);