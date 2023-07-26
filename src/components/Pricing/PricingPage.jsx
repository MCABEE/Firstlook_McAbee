import { useEffect } from "react"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import BoostProfile from "./BoostProfile"
import Pricing from "./Pricing"

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <>
            <Navbar />
            <Pricing />
            <BoostProfile/>
            <Footer />
        </>
    )
}

export default PricingPage