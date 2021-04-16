import Link from 'next/link'

const Hero = () => {
    return (
        <div className="main-banner header-text" id="top">
            <div className="Modern-Slider">

                <div className="item item-1">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>lorem ipsum dolor sit amet!</h6>
                            <h4>Quam temporibus accusam <br /> hic ducimus quia</h4>
                            <p>Magni deserunt dolorem consectetur adipisicing elit. Corporis molestiae optio, laudantium odio quod rerum maiores, omnis unde quae illo.</p>
                            <Link href="/packages"><a className="filled-button">Packages</a></Link>
                        </div>
                    </div>
                </div>

                <div className="item item-2">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>magni deserunt dolorem harum quas!</h6>
                            <h4>Aliquam iusto harum <br />  ratione porro odio</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa cupiditate mollitia adipisci assumenda laborum eius quae quo excepturi, eveniet. Dicta nulla ea beatae consequuntur?</p>
                            <Link href="/about"><a className="filled-button">About Us</a></Link>
                        </div>
                    </div>
                </div>

                <div className="item item-3">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>alias officia qui quae vitae natus!</h6>
                            <h4>Lorem ipsum dolor <br />sit amet, consectetur.</h4>
                            <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate mi. Sed nec cursus augue. Phasellus lacinia ac sapien vitae dapibus. Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.</p>
                            <Link href="/contact"><a className="filled-button">Contact Us</a></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Hero;
