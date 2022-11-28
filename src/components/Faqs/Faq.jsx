import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const Faq = ({question, answer}) => {
      const [isAnswerShowing, setAnswesShowing] = useState (false)

  return (
    <article className="faq"
    onClick={() => setAnswesShowing(prev => !prev)}
    >
        <div>
            <h4>{question}</h4>
            <button className="faq__icon" >
              {
                isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
            
              }
            </button> 
        </div>
        {
            isAnswerShowing &&
            <p>{answer}</p>
        }
    </article>
  )
}

export default Faq