import React from 'react'
import TestimonialItem from './TestimonialItem/TestimonialItem';

const testimoials = [
    {
        name: 'George Walker',
        designation: 'Chief Financial Analyst',
        feedback: '"Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem sit amet quam. Pellentesque in sagittis lacus."',
        image: 'http://placehold.it/60x60'
    },
    {
        name: 'John Smith',
        designation: 'Market Specialist',
        feedback: '"In eget leo ante. Sed nibh leo, laoreet accumsan euismod quis, scelerisque a nunc. Mauris accumsan, arcu id ornare malesuada, est nulla luctus nisi."',
        image: 'http://placehold.it/60x60'
    },
    {
        name: 'David Wood',
        designation: 'Chief Accountant',
        feedback: '"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."',
        image: 'http://placehold.it/60x60'
    },
    {
        name: 'Andrew Boom',
        designation: 'Marketing Head',
        feedback: '"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."',
        image: 'http://placehold.it/60x60'
    }
];

export default function Testimonials() {
    return (
        <>

            <div className="testimonials" style={{ margin: "0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-testimonials owl-carousel">
                                {testimoials.map((testimoialsParameters) => (
                                    <TestimonialItem {...testimoialsParameters} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
