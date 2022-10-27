import React from 'react'
import Navigation from './Navigation/Navigation'
import {Link, useLoaderData} from 'react-router-dom'

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
            <Link className='checkout' to="/checkout">Get premium access</Link>
        </div>
    </div>
  )
}

export default Quiz



// This is the course details page. To reduce some word I was coppied my assignment 9.
// I was facing difficulties while changing the name from to Quiz to Course.
// I have used the Quiz component of assignment 9 as Course Detalils. 
// Please Consider!