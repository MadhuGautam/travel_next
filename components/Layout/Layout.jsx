import Header from './Header/Header'
import Link from 'next/link'
import Footer from './Footer/Footer'

const Layout = props => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            {/* <Link href="#" id="back-to-top"><a title="back to top" style={{ display: "none" }}>&uarr;</a></Link> */}

        </>
    );
}

export default Layout;
