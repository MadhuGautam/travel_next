import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const Terms = () => {

    const PageTitle = [
        {
            id: 1,
            heading: 'Terms',
            subheading: 'Lorem ipsum dolor sit amet.'
        }
    ];

    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}

            <div className="more-info about-info">
                <div className="container">
                    <div className="more-info-content">
                        <div className="right-content">
                            <span>A: Lorem ipsum dolor sit amet</span>
                            <h5>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iure.</h5>
                            <br />
                            <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem. Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>

                            <br />

                            <span>A: Lorem ipsum dolor sit amet</span>
                            <h5>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iure.</h5>
                            <br />
                            <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem. Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>

                            <br />

                            <span>A: Lorem ipsum dolor sit amet</span>
                            <h5>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iure.</h5>
                            <br />
                            <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem. Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>

                            <br />

                            <span>A: Lorem ipsum dolor sit amet</span>
                            <h5>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iure.</h5>
                            <br />
                            <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem. Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>

                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Terms;
