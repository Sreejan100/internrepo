import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className ="navbar  personalheader ">
            <div className="appname">
                <h3>Quiz App</h3>
            </div>
            <div className = "Adminpage">
                <h3><Link className="link" to="/admin">Admin</Link></h3>
            </div>
            <div className = "homepage">
                <h3><Link className="link" to="/home">Home</Link></h3>
            </div>
        </div>
    )
}

export default Header
