import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {

    console.log(props.user);
    const name = props.user.displayName;
    const image = props.user.photoURL;

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
                <button  id = "b" className='link' onClick={handleClick}>Light</button>
                { image ? <div class="click-to-top">
                            <img src={image} alt="Image 1" />
                            <span>{name}</span>
                        </div>:
                    <Link className='link' to = '/login'>Log In</Link>
                 }
               
                
            </div>
        </div>
    )
   
}

export default Navigation