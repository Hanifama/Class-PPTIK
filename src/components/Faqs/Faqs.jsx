import React from 'react'
import SectionHead from '../SectionHead'
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../../data'
import Faq from './Faq'

const Faqs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead title='QnA Class PPTIK' />
            <div className="faqs__wrapper">
                {
                    faqs.map(({id,question,answer}) =>{
                        return <Faq key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faqs