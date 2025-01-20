import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" >
                        <a className="nav-link active" aria-current="page">Home</a>
                    </Link>                        
                    <Link to="/register">
                        <a className="nav-link">Register</a>
                    </Link>                            
                </div>
                </div>
            </div>
        </nav>
    )
}