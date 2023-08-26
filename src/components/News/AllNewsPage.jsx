import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import AllNews from "./AllNews"
import TopNews from "./TopNews"

const AllNewsPage = () => {
    return (
        <>
            <Navbar />
            <TopNews />
            <AllNews/>
            <Footer />
        </>
    )
}

export default AllNewsPage