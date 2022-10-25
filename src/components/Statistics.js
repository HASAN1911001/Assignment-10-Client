import React, { useEffect, useState } from "react";
import Navigation from './Navigation'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer } from 'recharts';


function Statistics() {
    const [skills, setSkills] = useState([]);

    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=> res.json())
        .then(data=> setSkills(data.data));
    }, [])

    let data = skills;

    // skills.map(skill => {
    //     let d = {
    //         name: skill.name,
    //         uv: skill.total
    //     }
    //     data.push(d);
    // })
  return (
    <div>
        <Navigation></Navigation>

        <h1 style={{textAlign: 'center'}}> Summary of the quiz </h1>
        {/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
             <h1> Summary of the quiz </h1>
        </div> */}
        <ResponsiveContainer width="100%" height={500}>
            <LineChart  data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Statistics