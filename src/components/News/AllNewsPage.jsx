import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import AllNews from "./AllNews"
import TopNews from "./TopNews"

const AllNewsPage = () => {
    return (
        <>
            <Navbar />
            <TopNews />
            <hr className='mt-4 border-gray-300 border-1 w-4/5 mx-auto' />
            <AllNews/>
            <Footer />
        </>
    )
}

export default AllNewsPage