import React from 'react';
import {Link} from 'resct-router'

export const Header=(props)=>{
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/user"}>User</Link></li>
                        <li><Link to={"/logein"}>User</Link></li>
                        <li><Link to={"/signin"}>User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};