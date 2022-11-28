import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import '../../pages/home/Home.css'

const footer = () => {
  return (
    <footer>
        <div className="container footer__container">

            <div className="footer__1">
                <Link to='/course' className='footer__logo'>
                     <h4>Class PPTIK</h4>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, accusantium?</p>
            </div>

            <div className="footer__2">
            <h4>Class PPTIK</h4>
            <ul className="permalinks">
                <li>
                <Link to='/course' className='footer__logo'>
                     Home
                </Link>
                </li>
                <li>
                <Link to='/course' className='footer__logo'>
                     About
                </Link>
                </li>
                <li>
                <Link to='/course' className='footer__logo'>
                     Courses
                </Link>
                </li>
                <li>
                <Link to='/course' className='footer__logo'>
                     Contact
                </Link>
                </li>
            </ul>
            </div>

            <div className="footer__3">
            <h4>About PPTIK</h4>
            <ul className="privacy">
                <li>
                <Link to='/course' className='footer__logo'>
                     Down App Class pptik
                </Link>
                </li>
                <li>
                <Link to='/course' className='footer__logo'>
                     Courses class pptik
                </Link>
                </li>
                <li>
                <Link to='/course' className='footer__logo'>
                     Contact class pptik
                </Link>
                </li>
            </ul>
            </div>

            <div className="footer__4">
            <h4>Contact us</h4>
                
                <div>
                    <p>+62 812345678910</p>
                    <p>PPTIKITB@gmail.com</p>
                </div>
            <ul className="footer__socials">
                <li>
                <Link to='/course'>
                     <AiFillFacebook/>
                </Link>
                </li>
                <li>
                <Link to='/course'>
                     <AiFillTwitterSquare/>
                </Link>
                 </li>
                <li>
                <Link to='/course'>
                     <BsYoutube/>
                </Link>
                </li>
                <li>
                <Link to='/course'>
                     <GrInstagram/>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        
          <div className="footer__copyright">  
               <small>Copyright &copy; PPTIK Class</small> 
          </div>
    </footer>
  )
}

export default footer