import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Testmonial from './Testimonial';


export default function Contact() {
    return (
        <React.Fragment>
            <Testmonial />
            <div id='main_contact'>
                <h1>Contact Me</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='group-btn'>
                            <button className='btn btn-lg'><IoMdMail /> mmoniscodi.com
                            </button>
                            <button className='btn btn-lg'><FaPhoneAlt /> +91 9910166490
                            </button>
                            <br />
                            <button className='btn btn-lg'><IoLocation /> New Delhi, India
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
