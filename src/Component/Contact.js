import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Testmonial from './Testimonial';


export default function Contact() {
    return (
        <React.Fragment>
            <Testmonial />
            <div className='contact'>
                <h2 className='heading text-white'>Contact Me</h2>
                <div className='container'>
               
                        
                  
                    <div className='row'>
                        <div className='g-btn'>
                        <button className='btn btn-lg text-white bg-dark'><IoMdMail /> mmoniscodi.com
                        </button>
                        <button className='btn btn-lg text-white bg-dark'><FaPhoneAlt /> mmoniscodi.com
                        </button>
                        <br />
                      <button className='btn btn-lg text-white bg-dark'><IoLocation /> New Delhi, India
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p className='text-white'>&copy @2025</p>
</div>
                
           
        </React.Fragment>
    )
}
