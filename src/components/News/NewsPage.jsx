import { useEffect } from "react"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import NewsDetails from "./NewsDetails"

const NewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <NewsDetails />
            <Footer />
        </>
    )
}

export default NewsPage