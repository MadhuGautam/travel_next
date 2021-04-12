import React from 'react'
import TopBar from '../TopBar/TopBar'

export default function Header() {
    return (
        <>
            <TopBar />

            <header className="">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><h2>Travel Agency <em> Website</em></h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home
                  <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="packages.html">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About</a>

                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="about.html">About Us</a>
                                        <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                                        <a className="dropdown-item" href="terms.html">Terms</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
