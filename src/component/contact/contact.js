import React, { useState } from 'react';
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

    const formRef = React.createRef();  // Create a ref for the form

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
        setRecaptchaCompleted(!!value);
    };

    const getData = async (e) => {
        e.preventDefault();
        const { name, subject, email, message } = formData;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FullName: name,
                subject,
                Email: email,
                Message: message
            })
        };

        const res = await fetch('https://portfolio-bb7ce-default-rtdb.firebaseio.com/UserData.json', options);

        if (res.ok) {
            alert('Message Stored and email sent successfuly');
        } else {
            alert('Error Occurred');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Perform form submission logic here

            // Correct the params for emailjs.sendForm
            let params = {
                to_name: "luvuyo",
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            emailjs.init("1kEnnpNHMM8fqhFJP");
            emailjs.sendForm("service_nyt6frj", "template_0tjklyi", formRef.current, params)
                .then(
                    function (response) {
                        console.log("Email sent successfully:", response);
                        // alert("Email sent successfully!"); // Consider removing this alert as it might be redundant with the next alert
                    },
                    function (error) {
                        console.log("Email sending failed:", error);
                        // alert("Email sending failed. Please try again later."); // Consider removing this alert as it might be redundant with the next alert
                    }
                );

            // Store data in Firebase
            await getData(e);

            // Funtion to clea the form after submission is done
            setFormData({
                name: '',
                subject: '',
                email: '',
                message: ''
            });
        } else {
            console.log('Form validation failed');
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        // Validate subject
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
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

    return (
        <>
            <section className='contact' id='contact'>
                <div className='contact top'>
                    <div className='heading text-center'>
                        <h2>CONTACT ME</h2>
                    </div>
                    <div className='contact d_flex'>
                        <div className='right box_shadow'>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>NAME</span>
                                        <input type='text' name='name' value={formData.name} onChange={onChange} />
                                        <div className='error'>{formErrors.name}</div>
                                    </div>
                                    <div className='input row'>
                                        <span>SUBJECT </span>
                                        <input type='text' name='subject' value={formData.subject} onChange={onChange} />
                                        <div className='error'>{formErrors.subject}</div>
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='email' value={formData.email} onChange={onChange} />
                                    <div className='error'>{formErrors.email}</div>
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message' value={formData.message} onChange={onChange}></textarea>
                                    <div className='error'>{formErrors.message}</div>
                                </div>
                                <ReCAPTCHA
                                    className='captcha'
                                    sitekey="6LfHsGgpAAAAAOh5a9TZmzWFFORTrp7yXqUf0Oza"
                                    onChange={onRecaptchaChange}
                                    size='compact'
                                    explicit 
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
