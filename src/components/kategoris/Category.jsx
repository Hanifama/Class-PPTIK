import React from 'react'
import { Link } from 'react-router-dom'
import {FiDatabase} from 'react-icons/fi'
import {GiAbstract018} from 'react-icons/gi'
import {Md3DRotation} from 'react-icons/md'
import {AiFillAndroid} from 'react-icons/ai'
import {AiOutlineLaptop} from 'react-icons/ai'
import {AiOutlinePicture} from 'react-icons/ai'
import '../../pages/home/Home.css'

const Category = () => {
  return (
  <section className="categories">
        <div className="container categories__container">

            <div className="categories__left">
                <h1>Categories</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quae sed voluptatum 
                    quasi libero suscipit autem laudantium, iure pariatur dolore earum eos ipsam laborum ducimus 
                    nostrum omnis necessitatibus esse.
                </p>
                <Link to='/course' className='btn btn-primary'>
                        Baca Sini
                </Link>
            </div>

            <div className="categories__right">

                <article className="category">
                    <span className='category__icon'>
                        <FiDatabase/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>

                <article className="category">
                    <span className='category__icon'>
                        <GiAbstract018/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>
                
                <article className="category">
                    <span className='category__icon'>
                        <Md3DRotation/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>

                
                <article className="category">
                    <span className='category__icon'>
                        <AiFillAndroid/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>

                
                <article className="category">
                    <span className='category__icon'>
                        <AiOutlineLaptop/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>

                
                <article className="category">
                    <span className='category__icon'>
                        <AiOutlinePicture/>
                    </span>
                    <h5>Database</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam </p>
                </article>

            </div>

        </div>
  </section>
   
  )
}

export default Category