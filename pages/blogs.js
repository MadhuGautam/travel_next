import Link from "next/link";
import PageTitleBox from '../components/PageTitleBox/PageTitleBox'

const Blogs = () => {
    const PageTitle = [
        {
            id: 1,
            heading: 'Read our Blog',
            subheading: 'Lorem ipsum dolor sit amet consectetur'
        }
    ];

    return (
        <>
            {PageTitle.map((item) => (

                <PageTitleBox key={item.id.toString()} {...item} />
            ))}


            <div className="single-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section className='tabs-content'>
                                <article id='tabs-1'>
                                    <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                                    <h4><Link href="blog_details"><a>Lorem ipsum dolor sit amet, consectetur adipisicing.</a></Link></h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span>John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15 comments</span>
                                    </div>
                                    <p>Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet.</p>
                                    <br />
                                    <div>
                                        <Link href="blog_details"><a className="filled-button">Continue Reading</a></Link>
                                    </div>
                                </article>

                                <br />
                                <br />
                                <br />

                                <article id='tabs-2'>
                                    <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                                    <h4><Link href="blog_details"><a>Mauris lobortis quam id dictum dignissim</a></Link></h4>
                                    <div style={{ marginBottom: "10px" }}>
                                        <span>John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15 comments</span>
                                    </div>
                                    <p>Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet</p>
                                    <br />
                                    <div>
                                        <Link href="blog_details"><a className="filled-button">Continue Reading</a></Link>
                                    </div>
                                </article>
                            </section>
                        </div>

                        <div className="col-md-4">
                            <h4 className="h4">Search</h4>

                            <form id="search_form" name="gs" method="GET" action="#">
                                <input type="text" name="q" className="form-control form-control-lg" placeholder="type to search..." autoComplete="on" />
                            </form>

                            <br />
                            <br />

                            <h4 className="h4">Recent posts</h4>

                            <ul>
                                <li>
                                    <h5 style={{ marginBottom: "10px" }}><Link href="blog_details"><a>Dolorum corporis ullam, reiciendis inventore est repudiandae</a></Link></h5>
                                    <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                                </li>

                                <li><br /></li>

                                <li>
                                    <h5 style={{ marginBottom: "10px" }}><Link href="blog_details"><a>Culpa ab quasi in rerum dolorum impedit expedita</a></Link></h5>
                                    <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                                </li>

                                <li><br /></li>

                                <li>
                                    <h5 style={{ marginBottom: "10px" }}><Link href="blog_details"><a>Explicabo soluta corrupti dolor doloribus optio dolorum</a></Link></h5>

                                    <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Blogs;