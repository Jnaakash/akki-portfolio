import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../Assets/hireme.png';
import reactLogo from '../Assets/react.svg';

function Intro() {
    return (
        <>
            <section id= 'intro'>
                <div className='introContent'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'>
                        I'm <span className='introName'>Aakash</span>
                        <br />
                        Web Developer
                    </span>
                    <p className='introPara'>
                        I am a skilled web developer turning bold ideas into sleek, 
                        <br />
                        interactive websites.
                        <br/>
                        Let's create something users love.
                    </p>

                    {/* Scroll to the "contact" section on button click */}
                     <a href='https://www.linkedin.com/in/aakash-jain-55429b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer' >
                        <button className='btn2'>
                            <img src={btnImg} alt='Hire Me' className='btnImg2' />
                            Hire Me
                        </button>
                    </a>
                </div> 

                {/* React Logo */}
                <img src={reactLogo} className="logo2" alt="React Logo"/>
            </section>
        </>
    );
}

export default Intro;
