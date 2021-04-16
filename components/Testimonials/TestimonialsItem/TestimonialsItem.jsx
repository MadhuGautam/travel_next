
const TestimonialsItem = ({ name, designation, feedback, image, alt }) => {

    return (
        <>
            <div className="inner-content">
                <h4>{name}</h4>
                <span>{designation}</span>
                <p>{feedback}</p>
            </div>
            <img src={image} alt={alt} />
        </>
    )
}

export default TestimonialsItem;
