import React from 'react'
//import Testimonials from '../components/Testimonials/Testimonials'
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'))
export default function testimonials() {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Testimonials</h1>
                            <span>testimonials from our greatest clients</span>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    )
}
