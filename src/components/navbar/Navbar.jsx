import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import { links } from '../../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);
    
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
        ('windows-scroll',window.scrollY > 0)
    })

  return (
    <nav>
        <div className="container nav__container">
            <Link to='/'>
                <p>Class PPTIK</p>
            </Link>
            <ul className={`nav__menu ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li>
                            <NavLink to={path} 
                            className={({isActive}) => isActive ? 'active-nav' : ''}
                            onClick={() => setIsNavShowing(prev => !prev)}
                            >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> :  <GoThreeBars/>
                }
                
            </button>
        </div>
    </nav>
  )
}

export default Navbar