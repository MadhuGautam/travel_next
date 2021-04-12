import TopBar from './components/TopBar/TopBar'
import Header from './components/Header/Header'
import Link from 'next/link'
import Footer from './components/Footer/Footer'
import FooterCopyright from './FooterCopyright/FooterCopyright'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Link href="#" id="back-to-top"><a title="back to top" style={{ display: "none" }}>&uarr;</a></Link>

        </>
    )
}
