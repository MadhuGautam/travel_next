import React from 'react'

export default function TopBar() {
    return (
        <>
            {/* Preloader Start */}
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}

            {/* <!-- TopBar --> */}
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <ul className="left-info">
                                <li><a href="#"><i className="fa fa-envelope"></i>contact@company.com</a></li>
                                <li><a href="#"><i className="fa fa-phone"></i>123-456-7890</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="right-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
