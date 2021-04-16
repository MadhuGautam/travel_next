import Skeleton from 'react-loading-skeleton';

const TestimonialLoader = () => {
    const Items = [1, 2, 3, 4];
    return (
        <>
            <div className="testimonials" style={{ margin: '0' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-testimonials owl-carousel">
                                {Items.map((item) => (
                                    <div className="testimonial-item" key={item.toString()}>
                                        <Skeleton height={500} width={800} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialLoader;
