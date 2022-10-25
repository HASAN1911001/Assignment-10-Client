import React from 'react';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = (props) => {
    const {id, name,logo,total} = props.skill;
   
    return(
        <div  className ='skill-container'>
            <div className="skill">
                <img src={logo}></img>
                <h3>{name}</h3>
                <h6>Total: {total} Quizs</h6> 
            </div>
            <Link to={`/quiz/${id}`} className='link'> View Quiz</Link>
        </div>  
     );
};

export default Skill;