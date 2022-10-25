import React from 'react'
import Navigation from './Navigation'
import {useLoaderData} from 'react-router-dom'
import Questions from './Questions';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Skill from './Skill';

function Quiz() {
    const data = useLoaderData();
    let quiz = data.data.questions;
    console.log(data.data.questions);
  return (
    <div>
        <Navigation></Navigation>
        <h1 style={{textAlign:'center', margin:'50px'}}>{data.data.name} Quiz</h1>
        {

            quiz.map(question => 
                    <Questions 
                     key={question.id}
                     question={question}>
                    </Questions>

                )
        }
    </div>
  )
}

export default Quiz