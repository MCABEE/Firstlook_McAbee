import { useEffect } from "react"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import AboutUs from "./AboutUs"

const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <>
            <Navbar />
            <AboutUs />
            <Footer />
        </>
    )
}

export default AboutUsPage