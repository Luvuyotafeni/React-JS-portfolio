import React, { useState } from 'react';
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        surname: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        fullname: '',
        surname: '',
        email: '',
        message: ''
    });

    const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
    };

    const onRecaptchaChange = (value) => {
        // value will be null if the reCAPTCHA challenge has not been completed
        setRecaptchaCompleted(!!value);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };

        // Validate fullname
        if (!formData.fullname.trim()) {
            newErrors.fullname = 'Fullname is required';
            valid = false;
        }

        // Validate surname
        if (!formData.surname.trim()) {
            newErrors.surname = 'Surname is required';
            valid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
            valid = false;
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        // Validate reCAPTCHA completion
        if (!recaptchaCompleted) {
            alert('Please complete the reCAPTCHA challenge.');
            valid = false;
        }

        setFormErrors(newErrors);

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Perform form submission logic here
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <>
            <section className='contact' id='contact'>
                <div className='contact top'>
                    <div className='heading text-center'>
                        <h2>CONTACT ME</h2>
                    </div>
                    <div className='contact d_flex'>
                        <div className='right box_shadow'>
                            <form onSubmit={handleSubmit}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>NAME</span>
                                        <input type='text' name='fullname' value={formData.fullname} onChange={onChange} required />
                                        <div className='error'>{formErrors.fullname}</div>
                                    </div>
                                    <div className='input row'>
                                        <span>SURNAME </span>
                                        <input type='text' name='surname' value={formData.surname} onChange={onChange} required />
                                        <div className='error'>{formErrors.surname}</div>
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='email' value={formData.email} onChange={onChange} required />
                                    <div className='error'>{formErrors.email}</div>
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message' value={formData.message} onChange={onChange} required></textarea>
                                    <div className='error'>{formErrors.message}</div>
                                </div>
                                <ReCAPTCHA
                                    className='captcha'
                                    sitekey="6LfHsGgpAAAAAOh5a9TZmzWFFORTrp7yXqUf0Oza"
                                    onChange={onRecaptchaChange}
                                />
                                <button type='submit'>
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                        <div className='left'>
                            <div className='con box_shadow'>
                                <p className='phone'><i className='bx bxs-phone'></i> 079 295 0603</p>
                                <p className='mail'><a href='mailto:luvuyotafeni012@gmail.com'><i className='bx bxs-envelope'> </i>luvuyotafeni012@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
