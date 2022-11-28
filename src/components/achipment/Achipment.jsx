import React from 'react'
import '../../pages/about/About.css'
import img from '../../images/About.svg'
import {AiOutlineFileProtect} from 'react-icons/ai'
import {SiGoogleclassroom} from 'react-icons/si'
import {FaUserGraduate} from 'react-icons/fa'
const Achipment = () => {
  return (
    <section className="about__achievements">

        <div className="container about__achievements-container">

            <div className="about__achieventment-left">
                <img src={img} alt="" />
            </div>

            <div className="about__achieventment-right">
                <h1>Achivients</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto debitis eveniet pariatur aperiam illo qui distinctio id? Laudantium suscipit laboriosam, repellendus, perspiciatis consectetur ducimus distinctio rem omnis beatae cumque veritatis.
                </p>

                <div className="achievements__cards">

                    <article className="achievements__card">
                        <span className="achievements__icon">
                        <AiOutlineFileProtect/>
                        </span>
                        <h3>400+</h3>
                        <p>
                           Course 
                        </p>
                    </article>

                    <article className="achievements__card">
                        <span className="achievements__icon">
                        <SiGoogleclassroom/>
                        </span>
                        <h3>400+</h3>
                        <p>
                           Course 
                        </p>
                    </article>

                    <article className="achievements__card">
                        <span className="achievements__icon">
                        <FaUserGraduate/>
                        </span>
                        <h3>400+</h3>
                        <p>
                           Course 
                        </p>
                    </article>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Achipment