import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import './Home.css';
import Navigation from "./Navigation";
import Header from "./Header";

const Home = () => {
    const [skills, setSkills] = useState([]);

    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=> res.json())
        .then(data=> setSkills(data.data));
    }, [])

    return(
        <div>
            <Navigation></Navigation>
            <div>
                 <Header></Header>
            </div>
  
            <div className="home">
            {
                skills.map(skill => 
                    <Skill 
                    key={skill.id}
                    skill={skill}></Skill>
                    )
            }
            </div>
            
        </div>
        
     );
};


export default Home;