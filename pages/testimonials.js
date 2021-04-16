import Testimonials from '../components/Testimonials/Testimonials'

//import dynamic from 'next/dynamic';
//import TestimonialLoader from '../components/Testimonials/TestimonialLoader'
//using Loading
//const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), { ssr: false });
//using Skeleton components
//const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), { loading: () => <TestimonialLoader /> })

import PageTitleBox from './../components/PageTitleBox/PageTitleBox';

const TestimonialPage = () => {

    const PageTitle = [
        {
            id: 1,
            heading: 'Testimonials',
            subheading: 'testimonials from our greatest clients'
        }
    ];
    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}

            <Testimonials />

        </>
    )
}
export default TestimonialPage;
