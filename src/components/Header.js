import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img src='https://digital-skills-jobs.europa.eu/sites/default/files/styles/dsj_small_banner_widget/public/2021-10/banner%20LP.png?itok=92km1_tk'></img>
      <div className='text'>
        <h1>You are in Right Place</h1>
        <h4>Check your digital skills</h4>
      </div>
    </div>
  )
}

export default Header