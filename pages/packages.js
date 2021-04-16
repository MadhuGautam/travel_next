import Link from 'next/link'
import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const Packages = () => {

    const PageTitle = [
        {
            id: 1,
            heading: 'Packages',
            subheading: 'Lorem ipsum dolor sit amet.'
        }
    ];

    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}

            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-1-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-2-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-3-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-4-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-5-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="assets/images/product-6-720x480.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span> <sup>$</sup>300.00 - <sup>$</sup>400.00 </span>
                                    </div>

                                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>

                                    <Link href="package_details"><a className="filled-button">View More</a></Link>
                                </div>
                            </div>

                            <br />
                        </div>
                    </div>

                    <br />
                    <br />

                    <nav>
                        <ul className="pagination pagination-lg justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>);
}

export default Packages;