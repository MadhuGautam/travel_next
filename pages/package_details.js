import Link from 'next/link';
import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const Package_details = () => {

    const PageTitle = [
        {
            id: 1,
            heading: ["300", "4000"],
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
                        <div className="col-md-7">
                            <div>
                                <img src="assets/images/product-1-720x480.jpg" alt="" className="img-fluid wc-image" />
                            </div>

                            <br />

                            <div className="row">
                                <div className="col-sm-4 col-6">
                                    <div>
                                        <img src="assets/images/product-1-720x480.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <br />
                                </div>
                                <div className="col-sm-4 col-6">
                                    <div>
                                        <img src="assets/images/product-2-720x480.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <br />
                                </div>
                                <div className="col-sm-4 col-6">
                                    <div>
                                        <img src="assets/images/product-3-720x480.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <br />
                                </div>
                            </div>

                            <br />
                        </div>

                        <div className="col-md-5">
                            <form action="#" method="post" className="form">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left">Available</span>

                                            <strong className="pull-right">Spring</strong>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left">Nights</span>

                                            <strong className="pull-right">20 nights</strong>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left"> Breakfast</span>

                                            <strong className="pull-right">Yes</strong>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left">Flight included</span>

                                            <strong className="pull-right">Yes</strong>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left">Free parking spot</span>

                                            <strong className="pull-right">Yes</strong>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="clearfix">
                                            <span className="pull-left">Free WiFi</span>

                                            <strong className="pull-right">Yes</strong>
                                        </div>
                                    </li>
                                </ul>
                            </form>

                            <br />

                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button btn-block text-center">Enquiry</a>

                            <br />
                        </div>
                    </div>

                    <div className="tabs-content" style={{ display: "block" }}>
                        <h4>Availability &amp; Prices</h4>

                        <div className="table-responsive">
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="table">
                                <thead>
                                    <tr>
                                        <th>Package</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>01-06-2020</td>
                                        <td>31-12-2020</td>
                                        <td>€ 300 per night</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>01-06-2020</td>
                                        <td>31-12-2020</td>
                                        <td>€ 300 per night</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>01-06-2020</td>
                                        <td>31-12-2020</td>
                                        <td>€ 300 per night</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>01-06-2020</td>
                                        <td>31-12-2020</td>
                                        <td>€ 4000 total price</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <br />

                    <div className="tabs-content" style={{ display: "block" }}>
                        <h4>INFO</h4>

                        <ul className="list-group list-group-no-border">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3">
                                        <p className="pjVpProductPolicyTitle">
                                            <strong>Check-in</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-10 col-sm-9">
                                        <p>
                                            Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum.
                           </p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3">
                                        <p>
                                            <strong>Check-out</strong>
                                        </p>
                                    </div>

                                    <div className="col-md-10 col-sm-9">
                                        <p>
                                            Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum.
                             </p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3">
                                        <p>
                                            <strong>Pets</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-10 col-sm-9">
                                        <p>
                                            Not allowed
                             </p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3">
                                        <p>
                                            <strong>Policies</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-10 col-sm-9">
                                        <div>
                                            <p>
                                                Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum. <br />
                                                                                                    Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum. <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3">
                                        <p>
                                            <strong>Fees</strong>
                                        </p>
                                    </div>

                                    <div className="col-md-10 col-sm-9">
                                        <div>
                                            <p>
                                                Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum. <br />
                                                                                                            Donec dapibus semper sem, ac ultrices sem sagittis ut. Donec sit amet erat elit, sed pellentesque odio. In enim ligula, euismod a adipiscing in, laoreet quis turpis. Ut accumsan dignissim rutrum. <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-lg-9">
                            <div className="tabs-content" style={{ display: "block" }}>
                                <h4>Map</h4>

                                <img src="assets/images/map.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="tabs-content">
                                <h4>Contact Details</h4>

                                <p>
                                    <span>Name</span>

                                    <br />

                                    <strong>John Smith</strong>
                                </p>

                                <p>
                                    <span>Phone</span>

                                    <br />

                                    <strong>
                                        <Link href="tel:123-456-789"><a>123-456-789</a></Link>
                                    </strong>
                                </p>

                                <p>
                                    <span>Mobile phone</span>

                                    <br />

                                    <strong>
                                        <Link href="tel:456789123"><a>456789123</a></Link>
                                    </strong>
                                </p>

                                <p>
                                    <span>Email</span>

                                    <br />

                                    <strong>
                                        <Link href="mailto:john@carsales.com"><a>john@carsales.com</a></Link>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <br />



                    <br />
                    <br />
                    <br />
                </div>
            </div>

        </>
    );
}

export default Package_details;