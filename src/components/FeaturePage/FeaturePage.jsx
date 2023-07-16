import Feature from "../Home/Feature"
import Footer from "../Home/Footer"
import JoinSection from "../Home/JoinSection"
import Navbar from "../Home/Navbar"

const FeaturePage = () => {
    return (
        <>
            <Navbar />
            <Feature />
            <hr className='sm:hidden block border-t-1 border-gray-400 mt-4 mb-6 w-10/12 ml-8' />
            <JoinSection />
            <Footer />
        </>
    )
}

export default FeaturePage