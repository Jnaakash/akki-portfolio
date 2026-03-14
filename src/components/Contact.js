import {useRef} from 'react'
import "./Contact.css"
import Linkedin from "../Assets/linkedin.svg"
import GitHub from "../Assets/github.svg"
import Instagram from "../Assets/instagram.svg"
import Linktree from "../Assets/linktree.svg"
import emailjs from '@emailjs/browser'


function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t0261mu', 'template_4em08lj', form.current, {
        publicKey: 'IPwZn5l26BT4jh9_W',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <>
           <section id='contact'>
            <div id='social'>
                <h1 className='socialTitle'>Socials</h1>
                <p className='socialDesc'>
                    Here you can connect with me on my social media</p>

                  <div className='socialImgs'>

                <div className='socialImg'>
                    <a href='https://www.linkedin.com/in/aakash-jain-55429b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'><img src={Linkedin} alt='Linkedin' className='SocialImg'/></a>
                    
                       
                </div>
                          <div className='socialImg'>
                   
                     <a href='https://github.com/Jnaakash' target='_blank' rel='noopener noreferrer'><img src={GitHub} alt='GitHub' className='SocialImg' /></a>
                      
                       
                </div>

                          <div className='socialImg'>
                   
                      <a href='https://www.instagram.com/__akash_jn_07?igsh=eDJ4Zmh5amVtN3Vr' target='_blank' rel='noopener noreferrer'><img src={Instagram} alt='Instagram' className='SocialImg'/></a>
                       
                </div>

                 <div className='socialImg'>
                   
                      <a href='http://linktr.ee/jnakash0706' target='_blank' rel='noopener noreferrer'><img src={Linktree} alt='Linktree' className='SocialImg'/></a>
                       
                </div>
                </div>
            </div>

            <div id='contactPage'>
                <h1 id='contactTitle'>Contact</h1>
                <span className='contactDesc'>Feel free to contact me</span>

                <form className='contactForm'  ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
                      <input type='email' className='email' placeholder='Your Email' name='your_email' required/>
                      <textarea className='msg' name='message' rows="5" placeholder='Your Message' required></textarea>
                      <button type='submit' value="Send" className='submitBtn' onClick={() =>{alert("Form Submitted!!")}}>Submit</button>
                </form>
            </div>
           </section>
        </>
    )
}

export default Contact 