import React, { useEffect, useState } from "react";
import Navigation from './Navigation/Navigation'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import CheckOut from "./Checkout";


function Faq() {
    


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

        <h1 style={{textAlign: 'center'}}> FAQ </h1>
       
    </div>
  )
}

export default Faq