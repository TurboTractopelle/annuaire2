import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation =(props)=> {
return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
        </nav>
    );
}

export default Navigation;