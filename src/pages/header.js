import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-search me-2"></i>SEO<span className="fs-5">Master</span></h1>
                      
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/about"  className="nav-item nav-link">About</Link>
                        <Link to="/service"  className="nav-item nav-link">Service</Link>
                         <Link to="/project" className='nav-item nav-link'>Projects</Link>
                         
                        <div className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/ourTeam" className='dropdown-item'>Our Team</Link>
                                <Link to="/test" className="dropdown-item">Testimonial</Link>
                               
                                <Link to="/notFound" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="/contact" className='nav-item nav-link'>Conatct</Link>
                         
                    </div>
                     
                </div>
            </nav>

    </>)
}

export default Header