import React from 'react'
import "./About.css"
import HTML from "../Assets/HTML5_Badge.svg"
import CSS from "../Assets/css-3.svg"
import JS from "../Assets/javascript.svg"
import R from "../Assets/react.svg"

function About() {
    return (
        <section id="about">
            <span className='aboutTitle'>What I Know</span>
            <span className='aboutDesc'>
                I am a skilled and passionate web designer with experience in creating visually 
                appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. 
                I am proficient in HTML, CSS, and JavaScript.
            </span>

            <div className='aboutBars'>

                <div className='aboutBar'>
                     <a  href='https://en.wikipedia.org/wiki/HTML'  target='_blank' rel='noopener noreferrer' className='aboutBarLink'>
                    <img src={HTML} alt='HTML' className='aboutBarImg' />
                    <div className='aboutBarText'>
                        <h2>HTML</h2>
                        <p>Hypertext Markup Language</p>
                        
                    </div>
                    </a>
                </div>


                 <div className='aboutBar'>
                    <a href='https://en.wikipedia.org/wiki/CSS' target='_blank' rel='noopener noreferrer'  className='aboutBarLink'>
                    <img src={CSS} alt='CSS' className='aboutBarImg' />
                    <div className='aboutBarText'>
                        <h2>CSS</h2>
                        <p>Cascading Style Sheets</p>
                    </div>
                    </a>
                </div>


                 <div className='aboutBar'>
                    <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank' rel='noopener noreferrer'className='aboutBarLink'>
                    <img src={JS} alt='JS' className='aboutBarImg' />
                    <div className='aboutBarText'>
                        <h2>JS</h2>
                        <p>JavaScript</p>
                    </div>
                    </a>
                </div>


                 <div className='aboutBar'>
                    <a href='https://en.wikipedia.org/wiki/React_(software)' target='_blank' rel='noopener noreferrer'className='aboutBarLink'>
                    <img src={R} alt='React' className='aboutBarImg' />
                    <div className='aboutBarText'>
                        <h2>React</h2>
                        <p>React.Js</p>
                    </div>
                    </a>
                </div>


            </div>
        </section>
    )
}

export default About
