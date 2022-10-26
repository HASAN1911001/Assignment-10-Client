import React from 'react';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = (props) => {
    const {id, name,logo} = props.skill;
    console.log(props.skill);
   
    return(
        <div  className ='skill-container'>
            <div className="skill">
                <img src={logo}></img>
                <h3>{name}</h3> 
            </div>
            <Link to={`/quiz/${id}`} className='link'>Details</Link>
        </div>  
     );
};

export default Skill;