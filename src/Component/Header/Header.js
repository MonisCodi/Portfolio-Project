import React from 'react'
import { LuSearch } from "react-icons/lu";
export default function Navbar() {
    return (
        <React.Fragment>

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
                                    <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='sarch-bar'>
                    <form class="form-inline d-flex">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
                 
                    </form>
                    </div>
                </div>
            </nav>


        </React.Fragment>
    )
}
