import Link from "next/link"
import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const Contact = () => {

    const PageTitle = [
        {
            id: 1,
            heading: 'Contact Us',
            subheading: 'feel free to send us a message now!'
        }
    ];
    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}

            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-phone"></i>
                                <h4>Phone</h4>
                                <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                                <Link href="#"><a>+1 333 4040 5566</a></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-envelope"></i>
                                <h4>Email</h4>
                                <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                                <Link href="#"><a>contact@company.com</a></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-map-marker"></i>
                                <h4>Location</h4>
                                <p>212 Barrington Court New York str <br /> USA</p>
                                <Link href="#"><a>View on Google Maps</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="callback-form contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Send us a <em>message</em></h2>
                                <span>Suspendisse a ante in neque iaculis lacinia</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-form">
                                <form id="contact" action="" method="get">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="map">
                {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
--> */}
                {/* <iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="500px" frameborder="0" style={{ "border": "0" }} allowfullscreen></iframe> */}
            </div>

        </>
    );
}

export default Contact;

