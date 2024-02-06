import React from 'react'
import "./contact.css"
import ReCAPTCHA from "react-google-recaptcha";

const contact = () => {
    const onChange = () =>{

    }
  return (
    <>
        <section className='contact' id='contact'>
            <div className='contact top'>
                <div className='heading text-center'>
                    <h2>CONTACT ME</h2>
                </div>
                <div className='contact d_flex'>
                    <div className='right box_shadow'>
                        <form >
                            <div className='f_flex'>
                                <div className='input row'>
                                    <span>NAME</span>
                                    <input type='text' name='fullname' required/>
                                </div>
                                <div className='input row'>
                                    <span>SURNAME </span>
                                    <input type='text' name='surname' required/>
                                </div>
                            </div>
                            <div className='input'>
                                <span>EMAIL </span>
                                <input type='email' name='email' required/>
                            </div>
                            <div className='input'>
                                <span>YOUR MESSAGE </span>
                                <textarea cols='30' rows='10' name='message' required></textarea>
                            </div>
                            <ReCAPTCHA className='captcha'
                                sitekey="6LfHsGgpAAAAAOh5a9TZmzWFFORTrp7yXqUf0Oza"
                                onChange={onChange}
                            />
                            <button>
                                SEND MESSAGE 
                            </button>
                        </form>
                    </div>
                    <div className='left'>
                        <div className='con box_shadow'>
                            <p className='phone'><i class='bx bxs-phone'></i> 079 295 0603</p>
                            <p className='mail'><a href='luvuyotafeni012@gmail.com' ><i class='bx bxs-envelope' > </i>luvuyotafeni012@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                

                
                
            </div>
        </section>
    </>
  )
}

export default contact