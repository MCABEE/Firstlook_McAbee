import { useEffect } from "react"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import HelpCenter from "./HelpCenter"

const HelpCenterPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <>
            <Navbar />
            <HelpCenter />
            <Footer />
        </>
    )
}

export default HelpCenterPage