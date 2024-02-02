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
                <div className='right box_shodow'>
                        <form >
                            <div className='f_flex'>
                                <div className='input row'>
                                    <span>NAME</span>
                                    <input type='text' name='fullname'/>
                                </div>
                                <div className='input row'>
                                    <span>SURNAME </span>
                                    <input type='text' name='surname'/>
                                </div>
                            </div>
                            <div className='input'>
                                <span>EMAIL </span>
                                <input type='email' name='email' />
                            </div>
                            <div className='input'>
                                <span>YOUR MESSAGE </span>
                                <textarea cols='30' rows='10' name='message'></textarea>
                            </div>
                            <button className='btn_shadow'>
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