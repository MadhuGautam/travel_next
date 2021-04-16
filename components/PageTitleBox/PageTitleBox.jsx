import Router, { useRouter } from 'next/router'

const PageTitleBox = ({ heading, subheading }) => {


    const router = useRouter()

    function isBlogDetailPage() {
        if ('/blog_details' === router.pathname) {
            // console.log(route + ' ' + router.pathname)
            return "true"
        }


    }

    function isPackageDetailPage() {
        if ('/package_details' === router.pathname) {
            // console.log(route + ' ' + router.pathname)
            return "true"
        }


    }

    return (
        <div className="page-heading header-text">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={isPackageDetailPage() == "true" ? { display: "none" } : { display: "block" }}>{heading}</h1>
                        <h1 style={isPackageDetailPage() != "true" ? { display: "none" } : { display: "block" }}><sup>€</sup>{heading[0]} - <sup>€</sup>{heading[1]}</h1>


                        <span style={isBlogDetailPage() == "true" ? { display: "none" } : { display: "block" }}>{subheading}</span>

                        <span style={isBlogDetailPage() != "true" ? { display: "none" } : { display: "block" }}><i className="fa fa-user"></i> {subheading[0]}&nbsp;|&nbsp;<i className="fa fa-calendar"></i> {subheading[1]}</span>
                        {/* <span style={isBlogDetailPage() != true ? { display: "none" } : { display: "block" }}><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</span> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PageTitleBox;