import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className='nav'>
            <div id="title">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Datum_logo.jpg?20170919153943"></img>
                <h1>Datum</h1>
            </div>
            
            <div className='Link'>
                <Link className='link' to = '/'>Courses</Link>
                <Link className='link' to = '/statistics'>FAQ</Link>
                <Link className='link' to = '/blog'>Blog</Link>
                <Link className='link' to = '/blog'>L/D</Link>
                <Link className='link' to = '/blog'>Log In</Link>
                
            </div>
        </div>
    )
   
}

export default Navigation