import React, { useState } from 'react';
import ContactImg from '../assets/contact-img.svg';
import './Contact.css';

function Contact() {

    const formInitialDetails = {
        fullname: '',
        email: '',
        phonenumber: '',
        messagebody: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const countryCodes = [
        { code: '+1', name: 'United States' },
        { code: '+44', name: 'United Kingdom' },
        { code: '+91', name: 'India' },
        { code: '+61', name: 'Australia' },
        { code: '+81', name: 'Japan' },
        { code: '+86', name: 'China' },
        { code: '+33', name: 'France' },
        { code: '+49', name: 'Germany' },
        { code: '+39', name: 'Italy' },
        { code: '+7', name: 'Russia' },
        { code: '+34', name: 'Spain' },
        { code: '+55', name: 'Brazil' },
        { code: '+52', name: 'Mexico' },
        { code: '+27', name: 'South Africa' },
        { code: '+82', name: 'South Korea' },
        { code: '+62', name: 'Indonesia' },
        { code: '+98', name: 'Iran' },
        { code: '+234', name: 'Nigeria' },
        { code: '+92', name: 'Pakistan' },
        { code: '+20', name: 'Egypt' },
        { code: '+54', name: 'Argentina' },
        { code: '+60', name: 'Malaysia' },
        { code: '+63', name: 'Philippines' },
        { code: '+31', name: 'Netherlands' },
        { code: '+46', name: 'Sweden' },
        { code: '+90', name: 'Turkey' },
        { code: '+41', name: 'Switzerland' },
        { code: '+351', name: 'Portugal' },
        { code: '+48', name: 'Poland' },
        { code: '+372', name: 'Estonia' },
        { code: '+973', name: 'Bahrain' },
        { code: '+1-246', name: 'Barbados' },
        { code: '+964', name: 'Iraq' },
        { code: '+965', name: 'Kuwait' },
        { code: '+856', name: 'Laos' },
        { code: '+218', name: 'Libya' },
        { code: '+960', name: 'Maldives' },
        { code: '+230', name: 'Mauritius' },
        { code: '+222', name: 'Mauritania' },
        { code: '+95', name: 'Myanmar' },
        { code: '+974', name: 'Qatar' },
        { code: '+966', name: 'Saudi Arabia' },
        { code: '+65', name: 'Singapore' },
        { code: '+94', name: 'Sri Lanka' },
        { code: '+963', name: 'Syria' },
        { code: '+886', name: 'Taiwan' },
        { code: '+66', name: 'Thailand' },
        { code: '+971', name: 'United Arab Emirates' },
    ];

    const handleNumericInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        const res = await fetch('http://localhost:5000/contact',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formDetails)
            }
        );
        const data = await res.json();
        setButtonText('Send');
        setFormDetails(formInitialDetails);
        if (data.code === 200) {
            setStatus({success: true, message: 'Message sent successfully!'});
        } else {
            setStatus({success: false, message: 'Something went wrong! Please try again!'});
        }
    }

    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='contact-container'>
                    <div className='contact-image'>
                        <img src={ContactImg} alt="Contact Info" />
                    </div>
                    <div className='contact-form'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullname" value={formDetails.fullname} placeholder='John Doe' onChange={(e) => onFormUpdate('fullname', e.target.value)} aria-describedby="fullnameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" value={formDetails.email} placeholder='johndoe@gmail.com' onChange={(e) => onFormUpdate('email', e.target.value)} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phonenumber" className="form-label">Phone No.</label>
                                <div className='input-group'>
                                    <select className="form-select" id="countryCode">
                                        {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.code} ({country.name})
                                        </option>
                                        ))}
                                    </select>
                                    <input type="text" className="form-control" id="phonenumber" value={formDetails.phonenumber} placeholder='98765 12345' onChange={(e) => onFormUpdate('phonenumber', e.target.value)} pattern='[0-9]*' onInput={handleNumericInput} aria-describedby="phonenumberHelp" style={{maxWidth: "70%"}} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messagebody" className="form-label">Message</label>
                                <textarea className="form-control" id="messagebody" value={formDetails.messagebody} placeholder='Enter your Message...' onChange={(e) => onFormUpdate('messagebody', e.target.value)} rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{buttonText}</button>
                            {status.message && <div className={status.success === false ? 'danger' : 'success'}>
                                {status.message}
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
