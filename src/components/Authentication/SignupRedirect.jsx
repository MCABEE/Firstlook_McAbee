import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import JoinSection from '../Home/JoinSection'
import firstLook from '../../assets/firstLook.png'

const SignupRedirect = () => {
    return (
        <>
            <div className="bg-white pt-4 pb-4 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <JoinSection />
            <Footer />
        </>
    )
}

export default SignupRedirect