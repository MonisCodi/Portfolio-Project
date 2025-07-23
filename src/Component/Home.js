import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <div className='bg-img'>
                <div className='container'>
                    <div className='row '>
                        <div className='col col-md-6 heading-center  '>
                            <div className='heading '>
                                <h4>I'M <strong style={{ fontSize: 40 }} className='text-white '>Mohd Monis</strong><br />
                                    Web Developer </h4>
                                <br />
                                <div className='home-btn'>
                                    <button className='btn btn-primary btn-lg'>Contact Me</button>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className='col col-md-6'>
                            <div className='img'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
