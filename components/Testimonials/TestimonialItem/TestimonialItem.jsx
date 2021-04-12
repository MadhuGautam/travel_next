import React from 'react'

export default function TestimonialItem({ name, designation, feedback, image }) {
    return (
        <div className="testimonial-item">
            <div className="inner-content">
                <h4>{name}</h4>
                <span>{designation}</span>
                <p>{feedback}</p>
            </div>
            <img src={image} alt="" />
        </div>
    )
}
