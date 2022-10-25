import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

//toast.configure()
function Questions(props) {
    
    const {question, options, correctAnswer} = props.question;

    const notify = () => {
        toast(correctAnswer);
    }

  return (
    <div style={{margin:'100px'}}>
        <div style={{display: 'flex', alignItems: 'center'}} className='question'>
            <h3>{question}</h3>
            <FontAwesomeIcon onClick={notify} icon={faEye} />
        </div>
        
        {
            options.map((option, i) => 
            <div key={i}>
                <p id='opt' onClick={e => {
                    if(e.target.innerText.replace(/\s/g, '') == correctAnswer.replace(/\s/g, ''))
                    {
                        toast("Correct");
                    }
                    else{
                        toast("Wrong");
                    }
                }
                }>{option}</p>
            </div>
            )
        }
        <ToastContainer />
    </div>
  )
}

export default Questions