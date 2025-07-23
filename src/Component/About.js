import React from 'react'
import Skills from './Skills'

export default function About() {
    return (
        <React.Fragment>
            <div className='about-page'>
                <div className='container '>
                    <div className='heading'>
                        <h2 style={{ float: 'left' }} className='text-white'>About</h2>
                        <br />
                        <br />
                        <div className='row'>
                            <div className='col col-11 p-text'>
                                <p className='text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Skills />
                </div>
            </div>
        </React.Fragment>
    )
}
