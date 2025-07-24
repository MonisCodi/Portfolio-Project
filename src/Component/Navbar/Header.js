import React from 'react'
export default function Navbar() {
    return (
        <React.Fragment>
            <div id='main_navbar'>
                <nav className="navbar navbar-expand-lg bg-dark text-white">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Navbar</a>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center text-white" id="navbarNav">
                            <div >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='sarch-bar'>
                            <form class="form-inline d-flex">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
