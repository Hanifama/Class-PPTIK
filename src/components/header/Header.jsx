import React from 'react'
import img from '../../images/HeaderH.svg'
import { Link } from 'react-router-dom'
import '../../pages/home/Home.css'

const Header = () => {
  return (
    <header>

        <div className="container header__container">

            <div className="header__left">
                 <h1>Kembangkan skill anda di class PPTIK ini</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi, velit fuga. Asperiores, necessitatibus voluptatibus. 
                    Distinctio, consequatur! A sed nostrum dolores?</p>
                    <Link to='/course' className='btn btn-primary'>
                        Join Now
                    </Link>
            
            </div>

            <div className="header__right">
                <div className="header__right-image">
                    <img src={img} />
                </div>
            </div>

        </div>
        
    </header>
  )
}

export default Header