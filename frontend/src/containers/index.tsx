import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar/>
            <div style={{minHeight:"60vh"}}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout