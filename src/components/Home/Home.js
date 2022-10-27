import React, { useEffect, useState } from "react";
import Skill from "../Skill";
import SkillsNav from "../SkillsNav";
import './Home.css';
import Navigation from "../Navigation/Navigation";

const Home = () => {
    const [skills, setSkills] = useState([]);

    useEffect( () => {
        fetch('https://b610-lerning-platform-server-side-hasan-1911001.vercel.app/course-categories')
        .then(res=> res.json())
        .then(data=> setSkills(data.data));
    }, [])

    return(
        <div>
            <Navigation></Navigation>

            <div className="container">
                

                <div className="home">
                    <div>
                    {
                    skills.map(skill => 
                        <Skill className="course"
                        key={skill.id}
                        skill={skill}></Skill>
                        )
                     }
                    </div>
                </div>

                <SkillsNav className="skillsnav">

                </SkillsNav>
            </div>
            
        </div>
        
     );
};


export default Home;