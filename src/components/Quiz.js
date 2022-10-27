import React from 'react'
import Navigation from './Navigation/Navigation'
import {Link, useLoaderData} from 'react-router-dom'
import Questions from './Questions';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Skill from './Skill';
import './Quiz.css'

function Quiz() {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>
        <Navigation></Navigation>
        <h1 style={{textAlign:'center', margin:'50px'}}>{data.data.name}</h1>
        <div className='imgdiv'>
           <img src={data.data.logo}></img>
        </div>
        <div className='p'>
          <h4>{data.data.description}</h4>
        </div>
        <div>
            <Link to="/checkout">Check Out</Link>
        </div>
    </div>
  )
}

export default Quiz