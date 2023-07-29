import { useEffect } from "react"
import Feature from "../Home/Feature"
import Footer from "../Home/Footer"
import JoinSection from "../Home/JoinSection"
import Navbar from "../Home/Navbar"

const FeaturePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Feature />
            <JoinSection />
            <Footer />
        </>
    )
}

export default FeaturePage