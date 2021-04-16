import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const About = props => {
    const PageTitle = [
        {
            id: 1,
            heading: 'About Us',
            subheading: 'We have over 20 years of experience'
        }
    ];
    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}

            <div className="more-info about-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <div className="right-content">
                                            <span>Lorem ipsum dolor sit amet</span>
                                            <h2>Get to know about <em>our company</em></h2>
                                            <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue,
                                            mi odio vehicula tellus, sit amet malesuada justo sem.<br /><br />Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend,
                                            ullamcorper dui nec, luctus quam.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="left-image">
                                            <img src="assets/images/about-1-570x350.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span>Lorem ipsum dolor sit amet</span>
                                <h2>Modi esse sapiente tenetur <em>impedit laudantium laborum</em></h2>
                                <p>Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit nec congue elementum. Nulla luctus laoreet porta.
                                Maecenas at nisi tempus, porta metus vitae, faucibus augue.<br /><br />Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis,
                                odio velit molestie nunc, ut posuere ante tortor ut neque.</p>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">1234</div>
                                        <div className="count-title">Destinations</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">6280</div>
                                        <div className="count-title">Happy clients</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">115</div>
                                        <div className="count-title">Cities</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">26</div>
                                        <div className="count-title">Packages</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;