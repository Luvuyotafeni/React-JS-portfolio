import React from 'react'
import "./contact.css"

const contact = () => {
  return (
    <>
        <section className='contact' id='contact'>
            <div className='contact top'>
                <div className='heading text-center'>
                    <h2>CONTACT ME</h2>
                </div>
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
                            <button>
                                SEND MESSAGE 
                            </button>
                        </form>
                    </div>
                
            </div>
        </section>
    </>
  )
}

export default contact