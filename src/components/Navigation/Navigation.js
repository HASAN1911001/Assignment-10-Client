import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    // let D_L = "Light";
    // const handleClick = (D_L) =>{
    //         D_L === D_L == "Light"? "Dark": "Light";
    //         // else D_L = "Dark";

    // }

    function handleClick() {
        var x = document.getElementById("b");
        if (x.innerHTML === "Light") {
            x.innerHTML = "Dark";
        } else {
            x.innerHTML = "Light";
        }
    }
    

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
                <Link className='link' to = '/login'>Log In</Link>
                <button  id = "b" onClick={handleClick}>Light</button>
                
            </div>
        </div>
    )
   
}

export default Navigation