import TopBar from '../TopBar/TopBar'
import Link from 'next/link';
import Router, { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()

    function isActive(route) {
        if (route === router.pathname) {
            // console.log(route + ' ' + router.pathname)
            return "active"
        }
        else ""

    }

    return (
        <>
            <TopBar />

            <header className="">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link href="/"><a className="navbar-brand" ><h2>Travel NEXT</h2></a></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" className={isActive('/')}>
                                    <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span>
                                    </a></Link>
                                </li>
                                <li className="nav-item" className={isActive('/packages')}>
                                    <Link href="/packages"><a className="nav-link">Packages</a></Link>
                                </li>
                                <li className="nav-item" className={isActive('/blogs')}>
                                    <Link href="/blogs"><a className="nav-link">Blog</a></Link>
                                </li>
                                <li className="nav-item" className={isActive('/testimonials')}>
                                    <Link href="/testimonials"><a className="nav-link">Testimonials</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link href="#"><a className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a></Link>

                                    <div className="dropdown-menu">
                                        <Link href="/about"><a className="dropdown-item" >About Us</a></Link>

                                        <Link href="/terms"><a className="dropdown-item">Terms</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item" className={isActive('/contact')}>
                                    <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
